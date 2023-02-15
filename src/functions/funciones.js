import axios from 'axios'

const API='https://rickandmortyapi.com/api/character/'


const allPersonajes= async (state) =>{
    const petecion= await axios.get(API)
  state(petecion.data.results)
}

const onePersonaje= async (id,state) =>{
    const petecion= await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    console.log(petecion.data)

}

export {
    allPersonajes,
    onePersonaje
}