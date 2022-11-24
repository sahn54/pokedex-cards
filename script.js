const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FAFF83',
    water: '#DEF3FD',
    ground: '#BBA178',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#D7A2FF', 
    bug: '#F8D5A3',
    dragon: '#97b3e6',
    psychic: '#956DB4',
    flying: '#F3FEFF',
    fighting: '#E6E0D4',
    normal: '#E9E8E8',
}

const main_types = Object.keys(colors)




const fetchPokemons = async() => {
    for(let i = 1 ; i <= pokemon_count; i++){
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    let idSecondDigit = () => {
        if (pokemon.id <= 9) {
           return 0
        } else if (pokemon.id >= 100) {
           return ''
        } else {
           return ''
        }
     }
   
     let idThirdDigit = () => {
        if (pokemon.id >= 100) {
           return ''
        } else {
           return 0
        }
     }


    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3,'0')
    const poke_types = pokemon.types.map(type =>type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundColor= color

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idThirdDigit()}${idSecondDigit()}${pokemon.id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>    
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}


fetchPokemons();