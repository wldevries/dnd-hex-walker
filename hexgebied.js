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
};

const baseColors = {
    desert: '#F0E68C',         // Khaki
    sea: '#1E90FF',            // Dodger Blue
    temperate: '#008000',      // Green (adjust as needed)
    continental: '#CD853F',    // Peru
    tropical: '#32CD32',       // Lime Green
    polar: '#87CEEB'           // Sky Blue
};

const terrainColors = {
    atoll: '#00FFFF',          // Cyan
    cave_system: '#663300',    // Brown
    coral_reef: '#FF7F50',     // Coral
    desert: '#F0E68C',         // Khaki
    forest: '#228B22',         // Forest Green
    forest_pine: '#2E8B57',    // Sea Green
    geyser: '#F5F5DC',         // Beige
    gletscher: '#B0C4DE',      // Light Steel Blue
    grassland: '#7CFC00',      // Lawn Green
    island: '#FFD700',         // Gold
    lake: '#ADD8E6',           // Light Blue
    mesa: '#D2691E',           // Chocolate
    mountain: '#808080',       // Gray
    oasis: '#32CD32',          // Lime Green
    rainforest: '#228B22',     // Forest Green (same as 'forest')
    ravine: '#8B4513',         // Saddle Brown
    rocks: '#A9A9A9',          // Dark Gray
    salt_flats: '#F5F5DC',     // Beige (same as 'geyser')
    sand_dune: '#DEB887',      // Burly Wood
    savanna: '#D2B48C',        // Tan
    sea: '#1E90FF',            // Dodger Blue
    swamp: '#8FBC8F',          // Dark Sea Green
    tundra: '#87CEEB',         // Sky Blue
    volcano: '#FF4500',        // Orange Red
    water: '#6495ED',          // Cornflower Blue
    whirlpool: '#00BFFF'       // Deep Sky Blue
};

const locationEmojis = {
    cave: '🕳️',
    city_castle: '🏰',
    city_mine: '⛏️',
    city_temple: '⛩️',
    demonic_hole: '🌀',
    druid_circle: '🌳',
    evil_temple: '👹',
    hex_walker_ruin: '🏛️',
    hex_walker_ruin_gigantic: '🏛️🌲',
    mage_tower: '🧙‍♂️',
    magical_mist: '💫',
    magical_obelisk: '🗿',
    magical_sandstorm: '🌪️',
    market_place_with_water_well: '🛒🌊',
    mine: '⛏️',
    misc_safe: '🏯',
    monster_cave: '👹🕳️',
    monster_cave_system: '👹🕳️',
    monster_city: '👹🏙️',
    monster_nest: '👹🏚️',
    monster_village: '👹🏘️',
    port: '⚓',
    ruin: '🏚️',
    temple: '⛩️',
    tent_camp: '⛺',
    tower: '🗼'
};

const extraImage = {
    cave: "Grot.png",
    city_castle: "Dorp.png",
    city_mine: "Dorp.png",
    city_temple: "Dorp.png",
    demonic_hole: "monster nest.png",
    druid_circle: "Druid.png",
    evil_temple: "Tempel.png",
    hex_walker_ruin: "Ruine.png",
    hex_walker_ruin_gigantic: "Ruine.png",
    magical_obelisk: "Obelisk.png",
    mage_tower: "Uitkijktoren.png",
    misc_safe: "Uitkijktoren.png",
    monster_cave: "monster nest.png",
    monster_cave_system: "monster nest.png",
    monster_city: "monster nest.png",
    monster_nest: "monster nest.png",
    monster_village: "monster nest.png",
    ruin: "Ruine.png",
    temple: "Tempel.png",
    tower: "Uitkijktoren.png",
}

const terrainImage = {
    desert_desert: '1_woestijn.png',
    desert_mesa: '1_mesa.png',
    desert_oasis: '1_oase.png',
    desert_ravine: '1_ravijn.png',
    desert_salt_flats: '1_zoutvlate.png',
    desert_sand_dune: '1_zandduin.png',
    desert_savanna: '1_Savanne.png',
    sea_atoll: '2_atol.png',
    sea_coral_reef: '2_koraal.png',
    sea_island: '2_eiland.png',
    sea_rocks: '2_rotsen.png',
    sea_volcano: '2_vulkaan.png',
    sea_sea: '2_water.png',
    sea_whirlpool: '2_waterkolk.png',
    temperate_forest: '3_bos.png',
    temperate_grassland: '3_gras.png',
    temperate_lake: '3_meer.png',
    temperate_mountain: '3_bergen.png',
    temperate_ravine: '3_ravijn.png',
    temperate_swamp: '3_moeras.png',
    temperate_volcano: '3_vulkaan.png',
    temperate_water: '3_water.png',
    continental_forest_pine: '4_naaldbos.png',
    continental_grassland: '3_gras.png',
    continental_lake: '3_meer.png',
    continental_mountain: '3_bergen.png',
    continental_ravine: '3_ravijn.png',
    continental_tundra: '4_toendra.png',
    continental_water: '3_water.png',
    tropical_cave_system: '5_grotten.png',
    tropical_mountain: '5_bergen.png',
    tropical_rainforest: '5_regenwoud.png',
    tropical_swamp: '3_moeras.png',
    tropical_water: '3_water.png',
    tropical_volcano: '5_vulkaan.png',
    polar_forest_pine: '4_naaldbos.png',
    polar_geyser: '6_geizer.png',
    polar_gletscher: '6_gletsjer.png',
    polar_ravine: '3_ravijn.png',
    polar_tundra: '4_toendra.png',
    polar_water: '6_ijs.png',
    polar_mountain: '5_bergen.png',
}

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
        desert: "Woestijn",
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
        resident_safe: "Bewoond",
        resident_monster: "Monster aanwezig",
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

function getEnvironment() {
    const sel = document.getElementById('environmentSelect');
    if (sel === undefined || sel.value === undefined || sel.value === 'random')
        return dict.environment[rollD6() - 1];
    return sel.value;
}

function getNeighbours(index, tiles) {
    const areaTiles = [
        [9, 10, 11],
        [8, 2, 3, 12],
        [19, 7, 1, 4, 13],
        [undefined, 18, 6, 5, 14],
        [undefined, undefined, 17, 16, 15]
    ]
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
        if (tile !== undefined)
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


function svgArea(area, hexSvg) {    
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
        .attr("fill", baseColors[area.environment]);

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const tileRot = d3.randomNormal(0,1);

    const areaTiles = area.tiles
        .map(t => {
            const rc = getRowCol(t.index);
            return {
                index: t.index,
                name: t.name,
                extra: t.extra,
                row: rc.row,
                col: rc.col,
                x: getX(rc.row, rc.col),
                y: getY(rc.row, rc.col),
                color: terrainColors[t.name],
            };
        });

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
        // .attr("transform", d => `translate(${d.x + tileWidth / 2}, ${d.y + tileHeight / 2}) rotate(${tileRot()})`)
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

    const ease = d3.easeBounceOut; //d3.easeElasticOut.amplitude(0).period(0.3);

    // definition for hexagon polygon
    // const hexPoints = hexagonPoints(0, 0, tileSide);
    // const hexString = hexPoints.map(p => p.join(",")).join(" ");

    // tiles.append("polygon")
    //     .attr("points", hexString)
    //     .attr("stroke", "#403225")
    //     .attr("fill", d => d.color)
    //     .attr("stroke-width", 0)
    //     .attr("opacity", 0)
    //     .attr("transform", d => `translate(0,-${1*tileSide}) rotate(-10 0 ${tileSide})`)
    //     .transition().ease(ease).delay(d => (d.index - 1) / 19 * 400).duration(1000)
    //     .attr("stroke-width", 4)
    //     .attr("opacity", 1)
    //     .attr("transform", d => `translate(0,0)`);

    // tiles.append("text")
    //     .html(d => {
    //         let lines = [translate(d.name)];
    //         if (d.extra !== undefined) {
    //             lines = [locationEmojis[d.extra.name], ...lines];
    //             // if (d.extra.type === 'danger') {
    //             //     // lines = ['💀', ...lines];
    //             //     lines = ['💀', ...lines];
    //             // }
    //             // if (d.extra.type === 'attraction') {
    //             //     lines = ['🏰', ...lines];
    //             // }
    //             // if (d.extra.resident === "monster") {
    //             //     lines = [...lines, '🐉'];
    //             // }
    //             // if (d.extra.resident === "safe") {
    //             //     lines = [...lines, '👨‍👩'];
    //             // }
    //         }
    //         return lines.map((v, i) => `<tspan>${v}</tspan>`).join('');
    //     })
    //     .attr("font-weight", "bold")
    //     .attr("text-anchor", "middle") // center horizontally
    //     .attr("dominant-baseline", "middle") // center vertically
    //     .attr("fill", d => getReadableColor(d.color))
    //     .attr("opacity", 0)
    //     .transition().delay(d => 500 + (d.index - 1) / 19 * 400).duration(1000)
    //     .attr("opacity", 1);

    const tileImageScale = (tileWidth / 500);
    tiles.append("image")
        .attr("href", d => "img/" + terrainImage[area.environment + "_" + d.name])
        .attr("opacity", 0)
        .attr("transform", d => `translate(${-tileWidth/2},${1*-tileSide-tileHeight/2}) rotate(-10 0 ${tileSide}) scale(${tileImageScale},${tileImageScale})`)
        .transition().ease(ease).delay(d => (d.index - 1) / 19 * 400).duration(1000)
        .attr("opacity", 1)
        .attr("transform", d => `translate(${-tileWidth/2},${-tileHeight/2}) scale(${tileImageScale},${tileImageScale})`);

    const extraImageScale = d3.format(".2f")(tileWidth / 600);    
    tiles.filter(d => d.extra !== undefined && extraImage[d.extra.name] !== undefined)
        .append("image")
        .attr("href", d => "img/" + extraImage[d.extra.name])
        // .attr("transform", d => `translate(${-tileWidth/2},${-tileHeight/2}) scale(${extraImageScale},${extraImageScale})`)
        .attr("transform", d => `scale(${extraImageScale},${extraImageScale})`)
        .attr("opacity", 0)
        .transition().delay(d => 500 + (d.index - 1) / 19 * 400).duration(1000)
        .attr("opacity", 1);

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

function getRandomColor() {
    // Randomly choose between green and brown
    const isGreen = Math.random() < 0.5;

    if (isGreen) {
        // Generate a random shade of green
        const r = Math.floor(Math.random() * 100); // 0 to 99
        const g = Math.floor(Math.random() * 156) + 100; // 100 to 255
        const b = Math.floor(Math.random() * 100); // 0 to 99
        return `rgb(${r},${g},${b})`;
    } else {
        // Generate a random shade of brown
        const r = Math.floor(Math.random() * 56) + 100; // 100 to 155
        const g = Math.floor(Math.random() * 56) + 50; // 50 to 105
        const b = Math.floor(Math.random() * 56); // 0 to 55
        return `rgb(${r},${g},${b})`;
    }
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

function rollDice() {
    return rollD6() + rollD6();
}

function rollD6() {
    return Math.floor(Math.random() * 6) + 1;
}