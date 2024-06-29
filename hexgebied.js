const dict = {
    environment: [
        'desert',
        'sea',
        'temperate',
        'continental',
        'tropical',
        'polar'
    ],
    
    desert: {
        terrain: {
            2: { name: 'oasis', extra: 'attraction', next: 9 },
            3: { name: 'salt_flats' },
            4: { name: 'savanna' },
            5: { name: 'ravine' },
            6: { name: 'sand_dune' },
            7: { name: 'mesa' },
            8: { name: 'desert' },
            9: { name: 'oasis' },
            10: { name: 'mesa', extra: 'danger', next: 7 },
            11: { name: 'salt_flats' },
            12: { name: 'desert', extra: 'danger', next: 8 },
        },

        tur: {
            2: { offset: -1 },
            3: { offset: -1 },
            4: { offset: -2 },
            5: { offset: 0 },
            6: { offset: 0 },
            7: { offset: 0 },
            8: { offset: 2 },
            9: { offset: 1 },
            10: { offset: 1 },
            11: { offset: 0, extra: 'danger' },
            12: { offset: 0, extra: 'danger' },
        },

        attraction1: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'tower' },
            5: { name: 'tower' },
            6: { name: 'temple' },
            7: { name: 'market_place_with_water_well' },
            8: { name: 'market_place_with_water_well' },
            9: { name: 'druid_circle' },
            10: { name: 'mine', resident: 'safe' },
            11: { name: 'mage_tower' },
            12: { name: 'mage_tower' },
        },

        attraction2: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'cave' },
            5: { name: 'cave' },
            6: { name: 'tower' },
            7: { name: 'market_place_with_water_well' },
            8: { name: 'mage_tower' },
            9: { name: 'temple' },
            10: { name: 'druid_circle' },
            11: { name: 'mine', resident: 'safe' },
            12: { name: 'mine', resident: 'safe' },
        },

        danger1: {
            2: { name: 'magical_obelisk' },
            3: { name: 'monster_village', resident: 'monster' },
            4: { name: 'monster_village', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'evil_temple' },
            7: { name: 'ruine', resident: 'monster' },
            8: { name: 'monster_cave', resident: 'monster' },
            9: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            10: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            11: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },

        danger2: {
            2: { name: 'magical_sandstorm' },
            3: { name: 'monster_nest', resident: 'monster' },
            4: { name: 'monster_nest', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'mage_tower' },
            7: { name: 'ruin', resident: 'monster' },
            8: { name: 'hex_walker_ruin' },
            9: { name: 'hex_walker_ruin' },
            10: { name: 'monster_cave_system', resident: 'monster', infect: true },
            11: { name: 'monster_cave_system', resident: 'monster', infect: true },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },
    },

    sea: {
        terrain: {
            2: { name: 'whirlpool' },
            3: { name: 'island' },
            4: { name: 'coral_reef' },
            5: { name: 'volcano', extra: 'danger', next: 11 },
            6: { name: 'sea' },
            7: { name: 'sea' },
            8: { name: 'rocks' },
            9: { name: 'atoll' },
            10: { name: 'island', extra: 'attraction', next: 3 },
            11: { name: 'volcano' },
            12: { name: 'rocks', extra: 'danger', next: 8 },
        },

        tur: {
            2: { offset: -1 },
            3: { offset: -1 },
            4: { offset: -2 },
            5: { offset: 0 },
            6: { offset: 0 },
            7: { offset: 0 },
            8: { offset: 2 },
            9: { offset: 1 },
            10: { offset: 1 },
            11: { offset: 0, extra: 'danger' },
            12: { offset: 0, extra: 'danger' },
        },

        attraction1: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'mage_tower' },
            5: { name: 'mage_tower' },
            6: { name: 'temple' },
            7: { name: 'tower' },
            8: { name: 'tower' },
            9: { name: 'port' },
            10: { name: 'port' },
            11: { name: 'cave' },
            12: { name: 'cave' },
        },

        attraction2: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'port' },
            5: { name: 'port' },
            6: { name: 'temple' },
            7: { name: 'cave' },
            8: { name: 'cave' },
            9: { name: 'tower' },
            10: { name: 'tower' },
            11: { name: 'mage_tower' },
            12: { name: 'mage_tower' },
        },

        danger1: {
            2: { name: 'magical_obelisk' },
            3: { name: 'monster_village', resident: 'monster' },
            4: { name: 'monster_village', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'evil_temple' },
            7: { name: 'ruin', resident: 'monster' },
            8: { name: 'monster_cave', resident: 'monster' },
            9: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            10: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            11: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },

        danger2: {
            2: { name: 'magical_sandstorm' },
            3: { name: 'monster_nest', resident: 'monster' },
            4: { name: 'monster_nest', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'mage_tower' },
            7: { name: 'ruin', resident: 'monster' },
            8: { name: 'hex_walker_ruin' },
            9: { name: 'hex_walker_ruin' },
            10: { name: 'monster_cave_system', resident: 'monster', infect: true },
            11: { name: 'monster_cave_system', resident: 'monster', infect: true },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },
    },

    temperate: {
        terrain: {
            2: { name: 'volcano' },
            3: { name: 'swamp' },
            4: { name: 'water' },
            5: { name: 'ravine' },
            6: { name: 'forest', extra: 'attraction', next: 8 },
            7: { name: 'grassland' },
            8: { name: 'mountain' },
            9: { name: 'forest' },
            10: { name: 'grassland', extra: 'attraction', next: 3 },
            11: { name: 'lake' },
            12: { name: 'swamp', extra: 'attraction', next: 6 },
        },

        tur: {
            2: { offset: -1 },
            3: { offset: -1 },
            4: { offset: -2 },
            5: { offset: 0 },
            6: { offset: 0 },
            7: { offset: 0 },
            8: { offset: 2 },
            9: { offset: 1 },
            10: { offset: 1 },
            11: { offset: 0, extra: 'danger' },
            12: { offset: 0, extra: 'danger' },
        },

        attraction1: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'tower' },
            5: { name: 'tower' },
            6: { name: 'temple' },
            7: { name: 'misc_safe', resident: 'safe' },
            8: { name: 'misc_safe', resident: 'safe' },
            9: { name: 'city_castle', resident: 'safe' },
            10: { name: 'tent_camp' },
            11: { name: 'mage_tower' },
            12: { name: 'mage_tower' },
        },

        attraction2: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'cave' },
            5: { name: 'tower' },
            6: { name: 'tower' },
            7: { name: 'tent_camp' },
            8: { name: 'misc_safe' },
            9: { name: 'temple' },
            10: { name: 'druid_circle' },
            11: { name: 'mage_tower' },
            12: { name: 'mage_tower' },
        },

        danger1: {
            2: { name: 'magical_obelisk' },
            3: { name: 'monster_village', resident: 'monster' },
            4: { name: 'monster_village', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'evil_temple' },
            7: { name: 'monster_village', resident: 'monster' },
            8: { name: 'monster_city', resident: 'monster' },
            9: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            10: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            11: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },

        danger2: {
            2: { name: 'magical_mist' },
            3: { name: 'ruin', resident: 'monster' },
            4: { name: 'ruin', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'mage_tower' },
            7: { name: 'monster_nest', resident: 'monster' },
            8: { name: 'hex_walker_ruin' },
            9: { name: 'hex_walker_ruin' },
            10: { name: 'monster_cave_system', resident: 'monster', infect: true },
            11: { name: 'monster_cave_system', resident: 'monster', infect: true },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },
    },
    
    continental: {
        terrain: {
            2: { name: 'tundra' },
            3: { name: 'ravine' },
            4: { name: 'forest_pine' },
            5: { name: 'lake' },
            6: { name: 'mountain', extra: 'attraction', next: 8 },
            7: { name: 'grassland' },
            8: { name: 'mountain' },
            9: { name: 'mountain' },
            10: { name: 'grassland', extra: 'attraction', next: 6 },
            11: { name: 'water' },
            12: { name: 'forest_pine', extra: 'attraction', next: 7 },
        },

        tur: {
            2: { offset: -1 },
            3: { offset: -1 },
            4: { offset: -2 },
            5: { offset: 0 },
            6: { offset: 0 },
            7: { offset: 0 },
            8: { offset: 2 },
            9: { offset: 1 },
            10: { offset: 1 },
            11: { offset: 0, extra: 'danger' },
            12: { offset: 0, extra: 'danger' },
        },

        attraction1: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'tower' },
            5: { name: 'tower' },
            6: { name: 'temple' },
            7: { name: 'misc_safe', resident: 'safe' },
            8: { name: 'misc_safe', resident: 'safe' },
            9: { name: 'city_castle', resident: 'safe' },
            10: { name: 'tent_camp' },
            11: { name: 'mage_tower' },
            12: { name: 'mage_tower' },
        },

        attraction2: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'cave' },
            5: { name: 'tower' },
            6: { name: 'tower' },
            7: { name: 'tent_camp' },
            8: { name: 'misc_safe' },
            9: { name: 'temple' },
            10: { name: 'druid_circle' },
            11: { name: 'mage_tower' },
            12: { name: 'mage_tower' },
        },

        danger1: {
            2: { name: 'magical_obelisk' },
            3: { name: 'ruin', resident: 'monster' },
            4: { name: 'ruin', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'evil_temple' },
            7: { name: 'monster_village', resident: 'monster' },
            8: { name: 'monster_city', resident: 'monster' },
            9: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            10: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            11: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },

        danger2: {
            2: { name: 'magical_mist' },
            3: { name: 'ruin', resident: 'monster' },
            4: { name: 'ruin', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'mage_tower' },
            7: { name: 'monster_nest', resident: 'monster' },
            8: { name: 'hex_walker_ruin' },
            9: { name: 'hex_walker_ruin' },
            10: { name: 'monster_cave_system', resident: 'monster', infect: true },
            11: { name: 'monster_cave_system', resident: 'monster', infect: true },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },
    },

        
    tropical: {
        terrain: {
            2: { name: 'volcano' },
            3: { name: 'water' },
            4: { name: 'swamp' },
            5: { name: 'mountain', extra: 'attraction', next: 9 },
            6: { name: 'mountain', extra: 'attraction', next: 9 },
            7: { name: 'rainforest' },
            8: { name: 'rainforest' },
            9: { name: 'mountain' },
            10: { name: 'rainforest', extra: 'danger', next: 4 },
            11: { name: 'cave_system' },
            12: { name: 'swamp', extra: 'attraction', next: 7 },
        },

        tur: {
            2: { offset: -1 },
            3: { offset: -1 },
            4: { offset: -2 },
            5: { offset: 0 },
            6: { offset: 0 },
            7: { offset: 0 },
            8: { offset: 2 },
            9: { offset: 1 },
            10: { offset: 1 },
            11: { offset: 0, extra: 'danger' },
            12: { offset: 0, extra: 'danger' },
        },

        attraction1: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'tower' },
            5: { name: 'tower' },
            6: { name: 'temple' },
            7: { name: 'misc_safe', resident: 'safe' },
            8: { name: 'misc_safe', resident: 'safe' },
            9: { name: 'city_temple', resident: 'safe' },
            10: { name: 'tent_camp' },
            11: { name: 'mage_tower' },
            12: { name: 'mage_tower' },
        },

        attraction2: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'cave' },
            5: { name: 'tower' },
            6: { name: 'tower' },
            7: { name: 'tent_camp' },
            8: { name: 'misc_safe' },
            9: { name: 'temple' },
            10: { name: 'druid_circle' },
            11: { name: 'mage_tower' },
            12: { name: 'mage_tower' },
        },

        danger1: {
            2: { name: 'magical_obelisk' },
            3: { name: 'ruin', resident: 'monster' },
            4: { name: 'ruin', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'evil_temple' },
            7: { name: 'monster_village', resident: 'monster' },
            8: { name: 'monster_city', resident: 'monster' },
            9: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            10: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            11: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },

        danger2: {
            2: { name: 'magical_mist' },
            3: { name: 'ruin', resident: 'monster' },
            4: { name: 'ruin', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'mage_tower' },
            7: { name: 'monster_nest', resident: 'monster' },
            8: { name: 'hex_walker_ruin' },
            9: { name: 'hex_walker_ruin' },
            10: { name: 'monster_cave_system', resident: 'monster', infect: true },
            11: { name: 'monster_cave_system', resident: 'monster', infect: true },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },
    },
        
    polar: {
        terrain: {
            2: { name: 'forest_pine' },
            3: { name: 'tundra' },
            4: { name: 'geyser' },
            5: { name: 'tundra', extra: 'danger', next: 3 },
            6: { name: 'ravine' },
            7: { name: 'gletscher' },
            8: { name: 'mountain' },
            9: { name: 'mountain' },
            10: { name: 'forest_pine', extra: 'attraction', next: 2 },
            11: { name: 'water' },
            12: { name: 'gletscher', extra: 'danger', next: 7 },
        },

        tur: {
            2: { offset: -1 },
            3: { offset: -1 },
            4: { offset: -2 },
            5: { offset: 0 },
            6: { offset: 0 },
            7: { offset: 0 },
            8: { offset: 2 },
            9: { offset: 1 },
            10: { offset: 1 },
            11: { offset: 0, extra: 'danger' },
            12: { offset: 0, extra: 'danger' },
        },

        attraction1: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'tower' },
            5: { name: 'tower' },
            6: { name: 'temple' },
            7: { name: 'misc_safe', resident: 'safe' },
            8: { name: 'misc_safe', resident: 'safe' },
            9: { name: 'city_mine', resident: 'safe' },
            10: { name: 'tent_camp' },
            11: { name: 'mage_tower' },
            12: { name: 'mage_tower' },
        },

        attraction2: {
            2: { name: 'ruin' },
            3: { name: 'ruin' },
            4: { name: 'cave' },
            5: { name: 'tower' },
            6: { name: 'tower' },
            7: { name: 'tent_camp' },
            8: { name: 'misc_safe' },
            9: { name : 'temple' },
            10: { name: 'druid_circle' },
            11: { name: 'mage_tower' },
            12: { name: 'mage_tower' },
        },

        danger1: {
            2: { name: 'magical_obelisk' },
            3: { name: 'ruin', resident: 'monster' },
            4: { name: 'ruin', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'evil_temple' },
            7: { name: 'monster_village', resident: 'monster' },
            8: { name: 'monster_city', resident: 'monster' },
            9: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            10: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            11: { name: 'hex_walker_ruin_gigantic', resident: 'monster' },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },

        danger2: {
            2: { name: 'magical_mist' },
            3: { name: 'ruin', resident: 'monster' },
            4: { name: 'ruin', resident: 'monster' },
            5: { name: 'mage_tower' },
            6: { name: 'mage_tower' },
            7: { name: 'monster_nest', resident: 'monster' },
            8: { name: 'hex_walker_ruin' },
            9: { name: 'hex_walker_ruin' },
            10: { name: 'monster_cave_system', resident: 'monster', infect: true },
            11: { name: 'monster_cave_system', resident: 'monster', infect: true },
            12: { name: 'demonic_hole', resident: 'monster', infect: true },
        },
    },
};

const translations = {
    'en': {
        atoll: "Atoll",
        cave: "Cave",
        coral_reef: "Coral reef",
        demonic_hole: "Demonic hole",
        desert: "Desert",
        druid_circle: "Druid circle",
        evil_temple: "Evil temple",
        hex_walker_ruin: "Hex walker ruin",
        hex_walker_ruin_gigantic: "Gigantic Hex-Walker ruin",
        island: "Island",
        mage_tower: "Mage tower",
        magical_obelisk: "Magical obelisk",
        magical_sandstorm: "Magical sandstorm",
        market_place_with_water_well: "Market place with water well",
        mesa: "Mesa",
        mine: "Mine / Quarry",
        monster_cave: "Monster cave",
        monster_cave_system: "Monster cave system",
        monster_nest: "Monster nest",
        monster_village: "Monster village",
        oasis: "Oasis",
        port: "Port",
        rocks: "Rocks",
        ruin: "Ruin",
        salt_flats: "Salt flats",
        savanna: "Savanna",
        sea: "Sea",
        ravine: "Ravine",
        sand_dune: "Sand dune",
        temple: "Temple",
        tower: "Fort / Castle / Lookout tower",
        volcano: "Volcano",
        whirlpool: "Whirlpool",
    },

    'nl': {
        atoll: "Atol",
        cave: "Grot",
        cave_system: "Grottenstelsel",
        city_castle: "Stad met kasteel",
        city_mine: "Mijnwerker stad",
        city_temple: "Stad met tempel",
        continental: "Continentaal",
        coral_reef: "Koraalrif",
        demonic_hole: "Demonisch Gat",
        desert: "Desert",
        druid_circle: "Druïde Cirkel",
        evil_temple: "Slechte Tempel",
        forest: "Bos",
        forest_pine: "Naaldbos",
        geyser: "Geiser",
        gletscher: "Gletsjer",
        grassland: "Grasland",
        hex_walker_ruin: "Hex-Walker Ruïne",
        hex_walker_ruin_gigantic: "Gigantische Hex-Walker Ruïne",
        island: "Eiland",
        lake: "Meer",
        mage_tower: "Magiër Toren",
        magical_obelisk: "Magische Obelisk",
        magical_mist: "Magische Mist",
        magical_sandstorm: "Magische Zandstorm",
        market_place_with_water_well: "Marktplein met Waterput",
        mesa: "Mesa",
        mine: "Mijn / Steengroeve",
        misc_safe: "Boederij / Mijn / Houthakkerskamp / Steengroeve",
        monster_cave: "Monster Grot",
        monster_cave_system: "Monster Grottenstelsel",
        monster_city: "Monster Stad / Kasteel",
        monster_nest: "Monster Nest",
        monster_village: "Monster Dorp",
        mountain: "Berg",
        oasis: "Oase",
        polar: "Pool",
        port: "Haven",
        resident_safe: "bewoond",
        resident_monster: "monster",
        rainforest: "Regenwoud",
        ravine: "Ravijn",
        rocks: "Rotsen",
        ruin: "Ruïne",
        salt_flats: "Zoutvlakte",
        sand_dune: "Zandduin",        
        savanna: "Savanne",
        sea: "Zee",
        swamp: "Moeras",
        temperate: "Gematigd",
        temple: "Tempel / Klooster",
        tent_camp: "Kolonisten Tentenkamp",
        tropical: "Tropisch",
        tower: "Fort / Kasteel / Uitkijktoren",
        tundra: "Toendra",
        volcano: "Vulkaan",
        water: "Water",
        whirlpool: "Waterkolk",
    },
}

const areaTiles = [
    [9, 10, 11],
    [8, 2, 3, 12],
    [19, 7, 1, 4, 13],
    [18, 6, 5, 14],
    [17, 16, 15]
]

function getEnvironment(){
    const sel = document.getElementById('environmentSelect');
    if (sel === undefined || sel.value === undefined || sel.value === 'random')
        return dict.environment[rollD6() - 1];
    return sel.value;
}

function getNeighbours(index, tiles) {
    let result = [];
    let row = areaTiles.findIndex(row => row.includes(index));
    let col = areaTiles[row].findIndex(tile => tile === index);
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
        result.push(tile);
    }
    return result;
}

function createArea() {
    const environmentName = getEnvironment();    
    const environment = dict[environmentName];

    const result = {
        environment: environmentName,
        tiles: []
    };

    let terrainIndex = rollDice();
    let tileNumber = 0;  
    while (result.tiles.length < 19) {
        if (tileNumber > 1) {
            const tur = environment.tur[rollDice()];
            terrainIndex += tur.offset;
            terrainIndex = 2 + ((terrainIndex + 8) % 10);
        }

        createTile(environment, tileNumber++, terrainIndex);
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
    tile = {
        index: (tileNumber + 1),
        name: terrain.name
    };
    
    let extra;
    if (terrain.extra === 'danger' || danger) {
        if (tileNumber < 7)
            extra = environment.danger1[rollDice()];

        else
            extra = environment.danger2[rollDice()];
        extra.type = 'danger';
    }
    else if (terrain.extra === 'attraction') {
        if (tileNumber < 7)
            extra = environment.attraction1[rollDice()];

        else
            extra = environment.attraction2[rollDice()];
        extra.type = 'attraction';
    }
    tile.extra = extra;
}

function drawHex() {
    const hex = document.getElementById('hex');
    hex.innerHTML = '';
    const area = createArea();

    const header = document.createElement('h3');
    header.textContent = 'Environment: ' + translate(area.environment);
    hex.appendChild(header);

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
        hex.appendChild(div);
    });
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

function rollDice() {
    return rollD6() + rollD6();
}

function rollD6() {
    return Math.floor(Math.random() * 6) + 1;
}