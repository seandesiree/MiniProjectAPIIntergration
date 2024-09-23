
function pressedSubmit(event) {
    event.preventDefault();
    const namePokemon = event.target.elements.searchPokemon.value;
    document.getElementById("myForm").reset();
    pokemonInfo(namePokemon);
}

async function pokemonInfo(pokemon){
    const pokemonData= await getPokemonInfo(pokemon);
    console.log(pokemonData);
    const pokemonInput=document.getElementById("pokemonInfo");
    pokemonInput.innerHTML = 
    '<h2>'+pokemonData.name.toUpperCase()+'</h2>\
     <img src='+pokemonData.sprites.front_default+'>\
     <p><strong>Base Experience</strong>: '+pokemonData.base_experience+'</p>\
     <p><strong>Type/Types:</strong> '+pokemonData.types.map(type=>type.type.name).join(', ')+'</p>\
     <h3>Stats:</h3>\
     <ul class=list-unstyled>'+pokemonData.stats.map(stat=>'<li>'+stat.stat.name+': '+stat.base_stat+'</li>').join('')+'</ul>\
     <h3>Abilities:</h3>\
     <ul class=list-unstyled>'+pokemonData.abilities.map(ability=>'<li>'+ability.ability.name+'</li>').join('')+'</ul>\
     <h2>Moves: </h2>\
     <ul class=list-unstyled>'+pokemonData.moves.map(move=>'<li>'+move.move.name+'</li>').join('')+'</ul>\
    '
}

async function getPokemonInfo(pokemon){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);
    const pokemonInfo= await response.json();
    return pokemonInfo;

}
