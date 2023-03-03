const form = document.querySelector('#form')
const todoLista = document.querySelector('#render-item') 
let sendBtn = document.querySelector('#skicka-btn')
let userItemInput = document.querySelector('#user-item-input')

// Från rad 15 tom 43 så ligger fetch metoderna i en addEventListener på formuläret. 
//e.preventDefault() funkar inte när man jobbar mot BASE_URL = 'http://localhost:3000/posts/'  

// Från rad 47 tom 71 ligger fetch metoderna "direkt" i js-filen och 
// en evighetsloop skapas mot BASE_URL = 'http://localhost:3000/posts/' 
// men inte mot BASE_URL = 'https://jsonplaceholder.typicode.com/posts/'    



// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/' 
const BASE_URL = 'http://localhost:3000/posts/' 

form.addEventListener('submit', e => {
    e.preventDefault()
    
// POST //
fetch(BASE_URL, {
  method: 'POST',
  body: JSON.stringify({
    title: userItemInput.value,
  }),
headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((data) => {
   console.log(data)
   todoLista.innerHTML = data.title 
  })
})

// GET
fetch(BASE_URL)
.then(res => res.json()) 
.then(data => { 
  console.log(data)
})

//-------------------------------------------------------//

// const BASE_URL2 = 'https://jsonplaceholder.typicode.com/posts/' 
// const BASE_URL2 = 'http://localhost:3000/posts/' 


// fetch(BASE_URL2, {
//   method: 'POST',
//   body: JSON.stringify({
//     title: userItemInput.value,
//   }),
// headers: {
//   'Content-type': 'application/json; charset=UTF-8',
// },
// })
// .then((response) => response.json())
// .then((data) => {
//    console.log(data)
//    todoLista.innerHTML = data.title 
//   })


// fetch(BASE_URL2)
// .then(res => res.json()) 
// .then(data => { 
//   console.log(data)
// })

