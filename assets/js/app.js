const pokemonList = document.getElementById('pokemon-list');

const invocacion = async() => {

    console.log('invocando la API');
    console.log('GET https://pokeapi.co/api/v2/pokemon');

    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const jsonData = await res.json();


    console.log(jsonData);
    console.log('Total', jsonData.count)

    document.querySelector('#tituloApp').innerHTML = `Obtuvimos ${jsonData.count} Pokemons`;

    jsonData.results.forEach(unPokemon => {
        
        const nuevoListItem = document.createElement('li');
        nuevoListItem.classList.add('list-group-item');
        nuevoListItem.innerHTML = `${unPokemon.name}: ${unPokemon.url}`;
        
        pokemonList.appendChild(nuevoListItem);
    });
    
}

invocacion().then();
