document.addEventListener('DOMContentLoaded', getPokemonInfo('charizard'));

async function getPokemonInfo(pokemon){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);
    const pokemonInfo= await response.json();
    console.log(pokemonInfo.name)
    //return pokemonInfo;
    const pokemonData=document.getElementById("pokemonInfo");
    pokemonData.innerHTML=
    '<h2>'+pokemonInfo.name.toUpperCase()+'</h2>\
     <img src='+pokemonInfo.sprites.front_default+'>\
     <p><strong>Type/Types:</strong> '+pokemonInfo.types.map(type=>type.type.name).join(', ')+'</p>\
     <h3>Stats:</h3>\
     <ul class=list-unstyled>'+pokemonInfo.stats.map(stat=>'<li>'+stat.stat.name+': '+stat.base_stat+'</li>').join('')+'</ul>\
     <h3>Abilities:</h3>\
     <ul class=list-unstyled>'+pokemonInfo.abilities.map(ability=>'<li>'+ability.ability.name+'</li>').join('')+'</ul>\
    '

}