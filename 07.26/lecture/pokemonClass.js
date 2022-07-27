var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// console.log the pokémon objects whose id is evenly divisible by 3
for (var a = 0; a < pokemon.length; a++){
    if (pokemon[a].id % 3 == 0){
        console.log(pokemon[a]);
    }
};
// console.log the pokémon objects that have more than one type
for (var b = 0; b < pokemon.length; b++){
    if (pokemon[b].types.length > 1){
        console.log(pokemon[b]);
    }
};
// console.log the names of the pokémon whose only type is "poison"
for (var c = 0; c < pokemon.length; c++){
    if (pokemon[c].types.length == 1 && pokemon[c].types[0] == "poison"){
        console.log(pokemon[c]);
    }
};
// console.log the first type of all the pokémon whose second type is "flying"
for (var d = 0; d < pokemon.length; d++){
    if (pokemon[d].types.length > 1 && pokemon[d].types[1] == "flying"){
        console.log(pokemon[d].types[0]);
    }
};
// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
for (var e = 0; e < pokemon.length; e++){
    if (pokemon[e].types.length == 1 && pokemon[e].types[0] == "poison"){
        var reverseName = "";
        for(var f = pokemon[e].name.length - 1; f >= 0; f--){
            reverseName += pokemon[e].name[f];
        }
        console.log(reverseName.toLowerCase());
    }
};
