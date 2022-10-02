const search = document.querySelector('#pokesearch');
const request = search.request;
const input = search.input;
const card = document.querySelector('.card');

const updatePokemon = async (name) => {

    const pokemon = await getPokemon(name);

    return pokemon;
}

request.addEventListener('submit', (e) => {

    e.preventDefault();

    updatePokemon(input.value)
        .then(data => console.log(data))
        .catch(err => console.log(err));

    search.reset();
});

