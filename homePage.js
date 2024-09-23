
document.addEventListener('DOMContentLoaded', async () => {
    const firstInfo = await firstEvolve('pokemon');
    const secondInfo = await secondEvolve('charmeleon');
    const thirdInfo = await thirdEvolve("charmander");
    const firstData= document.getElementById("first");
    firstData.innerHTML='<h3>'+firstInfo.name.toUpperCase()+'</h3>\
    <img src='+firstInfo.sprites.front_default+'>';
    const secondData= document.getElementById('second');
    secondData.innerHTML=
    '<h3>'+secondInfo.name.toUpperCase()+'</h3>\
    <img src='+secondInfo.sprites.front_default+'>';
    const thirdData= document.getElementById('third');
    thirdData.innerHTML=
    '<h3>'+thirdInfo.name.toUpperCase()+'</h3>\
    <img src='+thirdInfo.sprites.front_default+'>';
});

async function firstEvolve(pokemon) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);
    const pokemonData = await response.json();
    console.log(pokemonData);
    return pokemonData
}

async function secondEvolve(pokemon) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);
    const pokemonData = await response.json();
    return pokemonData
}

async function thirdEvolve(pokemon) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);
    const pokemonData = await response.json();
    return pokemonData
}

function pressedSubmit(event) {
    event.preventDefault();
    const namePokemon = event.target.elements.pokemonVote.value;
    
    document.getElementById("myForm").reset();
    alert("Thank you for submitting your pick of: "+namePokemon);
}
