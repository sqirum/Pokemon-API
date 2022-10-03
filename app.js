const search = document.querySelector('#pokesearch');
const request = search.request;
const input = search.input;
const card = document.querySelector('.card');

const updatePokemon = async (name) => {

    const pokemon = await getPokemon(name);

    return pokemon;
}

const updateUI = (data) => {
    // card.innerHTML = `
    //     <h3 class="text-center text-uppercase">${data.name}</h3>
    //     <ul class="mt-3">
    //     <li>Habilidade 1: ${data.abilities[0].ability.name}</li>
    //     <li>Habilidade 2: ${data.abilities[1].ability.name}</li>
    //     </ul>
    //     <div class="d-flex justify-content-evenly mt-3">
    //     <p class="bg-danger rounded-pill  px-4 py-3 text-white">${data.types[0].type.name}</p>
    //     <p class="bg-info rounded-pill px-4 py-3 text-white"> ${data.types[1].type.name}</p>
    //     </div>
    //     `;
    
    card.innerHTML = `
        <h3 class="text-center text-uppercase">${data.name}</h3>
        <ul class="mt-3">
        <li>Habilidade 1: ${data.abilities[0].ability.name}</li>
        </ul>
        <div class="d-flex justify-content-evenly mt-3">
        <p class="bg-danger rounded-pill  px-4 py-3 text-white">${data.types[0].type.name}</p>
        </div>
        `;

    console.log(data);
}

request.addEventListener('click', (e) => {

    e.preventDefault();

    updatePokemon(input.value)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    localStorage.setItem('pokemon', input.value);

    search.reset();
});

if (localStorage.getItem('pokemon')) {
    updatePokemon( (localStorage.getItem('pokemon')) )
        .then(data => updateUI(data))
        .catch( err => console.log(err));
}