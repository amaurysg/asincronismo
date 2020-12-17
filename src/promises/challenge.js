const fetchData = require("../utils/fetchdata")
/* const API = "https://rickandmortyapi.com/api/character/" */
const API = "https://pokeapi.co/api/v2/pokemon/"


fetchData(API)
.then(data => {
  //Pokemos
  console.log("Count:",data.count)
  console.log("Name:",data.results[0].name)
  //Pokemon ID
  return fetchData(`${data.results[0].url}`)
 
})
.then(data =>{
  //Abilities//
  console.log("Abilities:",data.abilities[0].ability.name)
  console.log("Move:",data.moves[0].move.name)
  return fetchData(`${data.species.url}`)
   
})
.then(data =>{  
  //Type of Pokémon//
  data.egg_groups.forEach(element => {
    console.log("Type:",element.name)   
  });
  return fetchData(`${data.evolution_chain.url}`)
})
.then( data => {
  //Evolves to 
  data.chain.evolves_to.forEach((e)=>{
    console.log("Evolves to:",e.species.name)
  })
}  
  )
  
.catch(
  err => console.error(err)
)

