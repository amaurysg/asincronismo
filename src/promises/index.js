//Promises//
const somethingWillHappen = ()=>{
  return new Promise((resolve, reject)=>{
    if(true){
     
      resolve("Ok 😀")
    }else{
      reject(" Mal 😮")
    }
  })
}
somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))

const somethingWillHappen2 = ()=>{
  return new Promise((resolve,reject)=>{
    if(true){
      setTimeout(() => {
        resolve("true")
      }, 
      3000);
    }else{
      const error = new Error("😮")
      reject(error)
    }

  })
}
somethingWillHappen2()
.then(response =>console.log(response))
.catch(err => console.error(err))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response =>{
  console.log("Array res", response)
})
.catch(err =>{
  console.error(err)
})
