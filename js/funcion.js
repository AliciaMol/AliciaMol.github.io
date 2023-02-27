// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
// var contenido = document.querySelector('#contenido')
// function traer() {
//     fetch('https://randomuser.me/api/')
//         .then(res => res.json())
//         .then(data => {
//             console.log("hola pues")
//             console.log(data.results['0'])
//             contenido.innerHTML = `
//                 <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
//                 <p>Nombre: ${data.results['0'].name.last}</p>
//                 `
//         })
// }

// const url = ' https://randomuser.me/api/?results=1 ';

// let myphoto = document.getElementById('myphoto');
// let fullname = document.getElementById('fullname');
// let username = document.getElementById('username');
// let email = document.getElementById('email');
// let city = document.getElementById('city');
// // let btn = document.getElementById('btn');

// // btn.addEventListener("click", function() {
// //   fetch(url)
// //     .then(handleErrors)
// //     .then(parseJSON)
// //     .then(updateProfile)
// //     .catch(printError)
// // });

// function handleErrors(res) {
//     if (!res.ok) {
//         throw error(res.status);
//     }
//     console.log(res);
//     return res;
// }

// function parseJSON(res) {
//     return res.json();
// }

// function updateProfile(profile) {
//     myphoto.src = profile.results[0].picture.medium;
//     fullname.innerHTML = profile.results[0].name.first + " " + profile.results[0].name.last;
//     username.innerHTML = profile.results[0].login.username;
//     email.innerHTML = profile.results[0].email;
//     city.innerHTML = profile.results[0].location.city;
//     return 1;
// }

// function printError(error) {
//     console.log(error);
// }

// function createNode(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//     return parent.appendChild(el);
// }

// const person = document.getElementById('person');
// const url = 'https://randomuser.me/api/?results=1';

// fetch(url)
//     .then((resp) => resp.json())
//     .then(function (data) {
//         let person = data.results;
//         return person.map(function (persona) {
//             let li = createNode('li');
//             let img = createNode('img');
//             let span = createNode('span');
//             img.src = author.picture.medium;
//             span.innerHTML = `${persona.name.first} ${persona.name.last}`;
//             append(li, img);
//             append(li, span);
//             append(ul, li);
//             console.log(person)
//         })

//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// var contenido = document.querySelector('#contenido')
var myname = document.getElementById('myname')
var myphoto = document.getElementById('myphoto')
var email = document.getElementById('email')
var cell = document.getElementById('cell')
// var ocupation = document.getElementById('ocupation')

let url = 'https://randomuser.me/api/?gender=female'    /*origen de los datos*/
let person;
fetch(url)                              /* Realizamos una solicitud a esta url*/
    .then(res => res.json())           /* Se resuelve la promesa y la pasa a formato json*/
    .then(data => {
        // console.log("hola pues")
        console.log(data.results['0'])   /**lo mostramos por consola */
        
        let img_api = data.results['0'].picture.large
        myphoto.setAttribute("src",img_api);

        myname.innerHTML = `${data.results['0'].name.first} ${data.results['0'].name.last}`

        email.innerHTML = `${data.results['0'].email}`

        cell.innerHTML = `Cel: ${data.results['0'].cell}`
        
    })
    .catch(error => console.log(error))

