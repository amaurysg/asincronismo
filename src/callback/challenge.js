// importamos el modulo para hacer las peticiones
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
// direccion de la API
/* let API = "https://rickandmortyapi.com/api/character/" */
let API = "https://pokeapi.co/api/v2/pokemon/"

// funcion principal
function fetchData(url_api, callback){
  // instanciamos la conexion
  let xhttp = new XMLHttpRequest()
  // abrir una conexion con el metodo, la ruta y si es asincrono(true)
  xhttp.open("GET", url_api, true)
  // validacion del llamado
  xhttp.onreadystatechange = function (event){
    // el state 4 es el ultimo de la peticion
    if(xhttp.readyState===4){
       // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
      if(xhttp.status===200){
          // el primer valor es el err, y el siguiente el resultado
        // ejecutamos el callback con el resultado
        callback(null, JSON.parse(xhttp.responseText))
      }else{
        const error = new Error("Error" + url_api)
        return callback(error, null)
      }
    }
  }

  xhttp.send()
}

/* let API = "https://rickandmortyapi.com/api/character/" */

fetchData(API, function(error1, data1){
  if(error1) return console.error(error1)
  fetchData(data1.results[0].url, function(error2,data2){
    if(error2) return console.error(error2)
    fetchData(data2.abilities[0].ability.url, function(error3, data3){
      if(error3) return console.log(error3)
      
  
      console.log('data3', data3)
    })
    

  /*   
    console.log('Small effects in this Pokémon: ', data3.effect_entries[0]) */
    
  /*   console.log('data2', data2.moves[0].move.name) */
    
  })
  
})
/*   console.log('data2', data2)
  console.log("url_1: ",API);
  console.log("url_2: ",data1.results[0].url);  */

 
     /* 
       console.log(data1.results[0].url) */
     /*  console.log(data2.abilities) */
       /*  console.log(data2.forms[0].name) */
        
  /*       console.log(data2.moves[0].move.name) */

         
           /*
          console.log(data3.residents[5])   */
         //Orden de peticiones//

      
           

          


 
  



