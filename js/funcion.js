/** --------------- Toma Datos de la API para cargar la info de Persona ---------------*/
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
        myphoto.setAttribute("src", img_api);

        myname.innerHTML = `${data.results['0'].name.first} ${data.results['0'].name.last}`
        // email.innerHTML = `${data.results['0'].email}`
        // cell.innerHTML = `Cel: ${data.results['0'].cell}`
    })
    .catch(error => console.log(error))


/** ---------------Circular progress---------------*/
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,
    progressEndValue = 45,
    speed = 100;

let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#9e3685 ${progressStartValue * 3.6}deg, #fdeef1 0deg)`
    // console.log(progressStartValue);
    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);