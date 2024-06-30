async function loadJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    return response.json();
}
    
document.addEventListener('DOMContentLoaded', (event) => {
    const createButton = document.getElementById('createButton');
    createButton.addEventListener('click', createHexArea);
});

// Main function to load all JSON files and use them
async function main() {
    try {
        // Load JSON files concurrently
        const [dict, translations, assets] = await Promise.all([
            loadJSON('./data.json'),
            loadJSON('./translations.json'),
            loadJSON('./assets.json')
        ]);

        // Assign JSON objects to global scope
        window.dict = dict;
        window.translations = translations;
        window.assets = assets;
    } catch (error) {
        console.error('Error loading JSON files:', error);
    }
}

function translate(key) {
    let text

    text = translations.nl[key];
    if (text !== undefined) {
        return text;
    }

    // text = translations.en[key];
    // if (text !== undefined) {
    //     return text;
    // }

    return '_' + key + '_';
}

const dice = {
    D6: d3.randomInt(1,7),
    twoD6() {
        return this.D6() + this.D6();
    }
}

const tur = {
    2: { offset: -1 },
    3: { offset: -1 },
    4: { offset: -2 },
    5: { offset: 0 },
    6: { offset: 0 },
    7: { offset: 0 },
    8: { offset: 2 },
    9: { offset: 1 },
    10: { offset: 1 },
    11: { offset: 0, extra: "danger" },
    12: { offset: 0, extra: "danger" }
};

function getEnvironment() {
    const sel = document.getElementById('environmentSelect');
    if (sel === undefined || sel.value === undefined || sel.value === 'random') {
        const d6 = dice.D6() - 1;
        return dict.environment[d6];
    }
    return sel.value;
}

function getNeighbours(index, tiles) {
    let result = [];
    const { row, col } = getRowCol(index);
    if (row != -1 && col != -1) {
        // neighbours on previous row
        if (row > 0) {
            if (col > 0) {
                addFromIndex(areaTiles[row - 1][col - 1]);
            }
            if (areaTiles[row - 1].length > col) {
                addFromIndex(areaTiles[row - 1][col]);
            }
        }
        // neighbours on same row
        if (col > 0) {
            addFromIndex(areaTiles[row][col - 1]);
        }
        if (col < areaTiles[row].length - 1) {
            addFromIndex(areaTiles[row][col + 1]);
        }
        // neighbours on next row
        if (row < areaTiles.length - 1) {
            if (col > 1) {
                addFromIndex(areaTiles[row + 1][col - 1]);
            }
            if (areaTiles[row + 1].length > col) {
                addFromIndex(areaTiles[row + 1][col]);
            }
        }
    }
    function addFromIndex(index) {
        const tile = tiles.find(tile => tile.index === index);
        if (tile !== undefined)
            result.push(tile);
    }
    return result;
}

function createArea() {
    const environmentName = getEnvironment();
    const environment = dict[environmentName];
    console.log(environmentName);

    const result = {
        environment: environmentName,
        tiles: []
    };

    let terrainIndex = dice.twoD6();
    let tileNumber = 0;
    while (result.tiles.length < 19) {
        if (tileNumber > 1) {
            const turRule = tur[dice.twoD6()];
            terrainIndex += turRule.offset;
            terrainIndex = 2 + ((terrainIndex + 8) % 10);
        }

        const tile = createTile(environment, tileNumber++, terrainIndex);
        result.tiles.push(tile);
    }

    result.tiles.forEach(tile => {
        if (tile.extra !== undefined && tile.extra.infect) {
            const neighBours = getNeighbours(tile.index, result.tiles);
            neighBours.forEach(neighbour => {
                if (neighbour.extra === undefined) {
                    neighbour.extra = {
                        name: 'monster_village',
                        resident: 'monster',
                        type: 'danger'
                    };
                }
                else if (neighbour.extra.resident === 'safe') {
                    neighbour.extra.resident = undefined;
                    neighbour.extra.ruin = true;
                }
            });
        }
    });

    return result;
}

function createTile(environment, tileNumber, terrainIndex, danger) {
    const terrain = environment.terrain[terrainIndex];
    let tile = {
        index: (tileNumber + 1),
        name: terrain.name,
        extra: undefined
    };

    let extra;
    if (terrain.extra === 'danger' || danger) {
        if (tileNumber < 7)
            extra = environment.danger1[dice.twoD6()];

        else
            extra = environment.danger2[dice.twoD6()];
        extra.type = 'danger';
    }
    else if (terrain.extra === 'attraction') {
        if (tileNumber < 7)
            extra = environment.attraction1[dice.twoD6()];

        else
            extra = environment.attraction2[dice.twoD6()];
        extra.type = 'attraction';
    }
    tile.extra = extra;
    return tile;
}

function createHexArea() {
    const area = createArea();
    const hexList = document.getElementById('hex-list');

    const container = document.createElement('div');
    container.classList.add('container');
    const hexSvg= document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    hexSvg.classList.add('hex-svg');
    const hexDetails = document.createElement('div');
    hexDetails.classList.add('hex-details');

    container.appendChild(hexSvg);
    container.appendChild(hexDetails);
    hexList.prepend(container);

    svgArea(area, hexSvg);
    printArea(area, hexDetails);
}

// determine the maximum tile side that fits within the window width
function decideTileSide() {
    const maxTileWidth = window.innerWidth;

    let tileSide = 80; // Initial tile side (radius)
    while (true) {
        const tileWidth = 2 * tileSide;
        const tileXIncrement = tileWidth - (tileWidth - tileSide) / 2;
        const width = 5 * tileXIncrement + tileWidth - tileXIncrement + tileWidth / 2;

        if (width <= maxTileWidth || tileSide <= 1) {
            break; // Exit loop when width is within acceptable range or tile size cannot be reduced further
        }

        tileSide--; // Decrease tile side to fit within maxTileWidth
    }
    return tileSide;
}

function svgArea(area, hexSvg, vector = false) {    
    const tileSide = decideTileSide(); // is radius
    const tileHeight = Math.sqrt(3) * tileSide;
    const tileWidth = 2 * tileSide;
    const tileXIncrement = tileWidth - (tileWidth - tileSide) / 2

    const margin = { top: tileHeight / 4, bottom: tileHeight / 4, left: tileWidth / 4, right: tileWidth / 4 };

    const width = 5 * tileXIncrement + tileWidth - tileXIncrement;
    const height = 5 * tileHeight;

    const svg = d3.select(hexSvg)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    const tooltip = d3.select("#tooltip");

    // Remove the previously generated hex area
    svg.selectAll("*").remove();

    svg.append("rect")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("fill", assets.baseColors[area.environment]);

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const areaTiles = area.tiles.map(t => createTileData(t));

    function createTileData(t) {
        const rc = getRowCol(t.index);
        return {
            index: t.index,
            name: t.name,
            extra: t.extra,
            row: rc.row,
            col: rc.col,
            x: getX(rc.row, rc.col),
            y: getY(rc.row, rc.col),
            color: assets.terrainColors[t.name],
        };
    }
        
    function getX(row, col) {
        const xOffset = d3.scaleLinear()
            .domain([0, 4])
            .range([2 * tileXIncrement, -2 * tileXIncrement]);

        const xTranslate = d3.scaleLinear()
            .domain([0, 4])
            .range([0, 4 * tileXIncrement]);

        return xOffset(row) + xTranslate(col);
    }

    function getY(row, col) {
        const yOffset = d3.scaleLinear()
            .domain([0, 4])
            .range([0 * tileHeight, 2 * tileHeight]);

        const yTranslate = d3.scaleLinear()
            .domain([0, 4])
            .range([0, 2 * tileHeight]);

        return yOffset(col) + yTranslate(row);
    }

    const tiles = g.selectAll("g")
        .data(areaTiles)
        .join("g")
        .attr("transform", d => `translate(${d.x + tileWidth / 2}, ${d.y + tileHeight / 2})`)
        .on("mouseover", function (event, d) {
            // Show the tooltip
            tooltip.style("display", "block")
                .html(`${tileTooltip(d)}`) // Example tooltip content
                .style("left", (event.pageX + 10) + "px") // Position tooltip slightly to the right of the cursor
                .style("top", (event.pageY - 20) + "px"); // Position tooltip slightly above the cursor
        })
        .on("mousemove", function (event) {
            // Update tooltip position as the mouse moves
            tooltip.style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 20) + "px");
        })
        .on("mouseout", function () {
            // Hide the tooltip on mouseout
            tooltip.style("display", "none");
        });

    const ease = d3.easeBounceOut;

    if (vector) {
        // definition for hexagon polygon
        const hexPoints = hexagonPoints(0, 0, tileSide);
        const hexString = hexPoints.map(p => p.join(",")).join(" ");

        tiles.append("polygon")
            .attr("points", hexString)
            .attr("stroke", "#403225")
            .attr("fill", d => d.color)
            .attr("stroke-width", 0)
            .attr("opacity", 0)
            .attr("transform", d => `translate(0,-${1*tileSide}) rotate(-10 0 ${tileSide})`)
            .transition().ease(ease).delay(d => (d.index - 1) / 19 * 400).duration(1000)
            .attr("stroke-width", 4)
            .attr("opacity", 1)
            .attr("transform", d => `translate(0,0)`);

        tiles.append("text")
            .html(d => {
                let lines = [translate(d.name)];
                if (d.extra !== undefined) {
                    lines = [assets.locationEmojis[d.extra.name], ...lines];
                    // if (d.extra.type === 'danger') {
                    //     // lines = ['💀', ...lines];
                    //     lines = ['💀', ...lines];
                    // }
                    // if (d.extra.type === 'attraction') {
                    //     lines = ['🏰', ...lines];
                    // }
                    // if (d.extra.resident === "monster") {
                    //     lines = [...lines, '🐉'];
                    // }
                    // if (d.extra.resident === "safe") {
                    //     lines = [...lines, '👨‍👩'];
                    // }
                }
                return lines.map((v, i) => `<tspan>${v}</tspan>`).join('');
            })
            .attr("font-weight", "bold")
            .attr("text-anchor", "middle") // center horizontally
            .attr("dominant-baseline", "middle") // center vertically
            .attr("fill", d => getReadableColor(d.color))
            .attr("opacity", 0)
            .transition().delay(d => 500 + (d.index - 1) / 19 * 400).duration(1000)
            .attr("opacity", 1);
    }
    else {
        const tileImageScale = (tileWidth / 500);
        tiles.append("image")
            .attr("href", d => "img/" + assets.terrainImage[area.environment + "_" + d.name])
            .attr("opacity", 0)
            .attr("transform", d => `translate(${-tileWidth/2},${1*-tileSide-tileHeight/2}) rotate(-10 0 ${tileSide}) scale(${tileImageScale},${tileImageScale})`)
            .transition().ease(ease).delay(d => (d.index - 1) / 19 * 400).duration(1000)
            .attr("opacity", 1)
            .attr("transform", d => `translate(${-tileWidth/2},${-tileHeight/2}) scale(${tileImageScale},${tileImageScale})`);

        const extraImageScale = d3.format(".2f")(tileWidth / 600);    
        tiles.filter(d => d.extra !== undefined && assets.extraImage[d.extra.name] !== undefined)
            .append("image")
            .attr("href", d => "img/" + assets.extraImage[d.extra.name])
            // .attr("transform", d => `translate(${-tileWidth/2},${-tileHeight/2}) scale(${extraImageScale},${extraImageScale})`)
            .attr("transform", d => `scale(${extraImageScale},${extraImageScale})`)
            .attr("opacity", 0)
            .transition().delay(d => 500 + (d.index - 1) / 19 * 400).duration(1000)
            .attr("opacity", 1);
    }
    return svg.node();
}

function tileTooltip(tile) {
    let text = "Tegel " + tile.index;
    text += "</br>" + translate(tile.name);
    if (tile.extra !== undefined) {
        text += "</br>" + translate(tile.extra.name);
        if (tile.extra.resident !== undefined) {
            text += "</br>" + translate('resident_' + tile.extra.resident);
        }
    }
    return text;
}

function printArea(area, divElement) {
    divElement.innerHTML = '';

    const header = document.createElement('h3');
    header.textContent = 'Environment: ' + translate(area.environment);
    divElement.appendChild(header);

    area.tiles.forEach(tile => {
        const div = document.createElement('div');
        div.textContent = tile.index + ' ' + translate(tile.name);
        if (tile.extra !== undefined) {
            div.textContent += ' & ' + translate(tile.extra.name);
            if (tile.extra.resident !== undefined) {
                div.textContent += ' (' + translate('resident_' + tile.extra.resident) + ')';
            }

            if (tile.extra.infect) {
                div.style.backgroundColor = 'red';
            }
            else if (tile.extra.type.includes('attraction')) {
                div.style.backgroundColor = 'lightblue';
            }
            else if (tile.extra.type.includes('danger')) {
                div.style.backgroundColor = 'orange';
            }
        }
        divElement.appendChild(div);
    });
}

function getRowCol(index) {
    const areaTileLocations = [
        [9, 10, 11],
        [8, 2, 3, 12],
        [19, 7, 1, 4, 13],
        [undefined, 18, 6, 5, 14],
        [undefined, undefined, 17, 16, 15]
    ]
    const row = areaTileLocations.findIndex(r => r.includes(index));
    if (row == -1)
        return undefined;
    const col = areaTileLocations[row].findIndex(col => col === index);
    return { row: row, col: col };
}

function getReadableColor(bgColor) {
    // Convert hex color to RGB components
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.substring(1), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    };

    // Calculate relative luminance according to W3C formula
    const getLuminance = (rgb) => {
        const { r, g, b } = rgb;
        const sRGB = (c) => {
            c /= 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        };
        return 0.2126 * sRGB(r) + 0.7152 * sRGB(g) + 0.0722 * sRGB(b);
    };

    // Get RGB components of background color
    const rgb = hexToRgb(bgColor);

    // Calculate background luminance
    const bgLuminance = getLuminance(rgb);

    // Threshold for deciding between black and white text
    const threshold = 0.5;

    // Determine which text color (black or white) has better contrast
    return bgLuminance > threshold ? '#000000' : '#FFFFFF';
}

function hexagonPoints(centerX, centerY, radius) {
    const angle = Math.PI / 3;
    const points = [];
    for (let i = 0; i < 6; i++) {
        const x = centerX + radius * Math.cos(angle * i);
        const y = centerY + radius * Math.sin(angle * i);
        points.push([x, y]);
    }
    return points;
}

// Run the main function
main();