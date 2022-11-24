const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const color = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: 'FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98d7a5', 
    bug: '#F8D5A3',
    dragon: '#97b3e6',
    psychic: '#eaerda1',
    flying: '#F5f5f5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
}

const fetchPokemons = () => {
    for(let i = 1 ; i <= pokemon_count; i++){
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}

fetchPokemons();