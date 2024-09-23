fetch('https://pokeapi.co/api/v2/ability?limit=20')
    .then(response => response.json())
    .then(data => {
    const abilities = data.results;
    abilityListElement.innerHTML = ''; 

    abilities.forEach(ability => {
      
fetch(ability.url)
    .then(response => response.json())
    .then(abilityData => {
        const abilityElement = document.createElement('div');
        abilityElement.classList.add('ability');

        const abilityNameElement = document.createElement('h3');
        abilityNameElement.textContent = abilityData.name;

        const abilityDescriptionElement = document.createElement('p');
        abilityDescriptionElement.textContent = abilityData.effect_entries[0].effect;

        abilityElement.appendChild(abilityNameElement);
        abilityElement.appendChild(abilityDescriptionElement);
        abilityListElement.appendChild(abilityElement);
        })
        .catch(error => {
        console.error(`Error fetching ability details: ${error}`);
        });
    });
})
    .catch(error => {
    console.error(`Error fetching abilities: ${error}`);
});