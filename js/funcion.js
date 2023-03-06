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
// let circularProgress = document.querySelector(".circular-progress"),
//     progressValue = document.querySelector(".progress-value");
// let progressStartValue = 0,
//     progressEndValue = progressValue.outerText,
//     speed = 100;

// let progress = setInterval(() => {
//     progressStartValue++;
//     progressValue.textContent = `${progressStartValue}%`
//     circularProgress.style.background = `conic-gradient(#9e3685 ${progressStartValue * 3.6}deg, #fdeef1 0deg)`
//     // console.log(progressStartValue);
//     if (progressStartValue == progressEndValue) {
//         clearInterval(progress);
//     }
// }, speed);

let mySkills = document.getElementsByClassName('mySkill')
for (let i = 0; i < mySkills.length; i++) {
    let circularProgress = mySkills[i].children[0],
        progressValue = mySkills[i].children[0].children[0];
    let progressStartValue = 0,
        progressEndValue = progressValue.outerText,
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



        console.log(mySkills[i].children[0]);

    // console.log(mySkills[i].childNodes[0]);
    console.log(i);
    console.log("CONTAINER se consigue con classList[0]");
    console.log(mySkills[i].classList[0]);
    console.log("circular-progress se consigue con .children[0]");
    console.log(mySkills[i].children[0]);

    console.log("progress-value se consigue con childNodes[0].className");
    console.log(mySkills[i].children[0].children[0].className);
    console.log("valor final de habilidad");
    //console.log(parseInt(mySkills[i].children[0].textContent));
    console.log(mySkills[i].children[0].children[0].textContent);
    console.log("habilidad");
    console.log(mySkills[i].children[1].textContent);





    // console.log(progresoCircular);
    //console.log("MI PRUEBA:")
    //console.log(mySkills);
    // let progressStartValue = 0,
    //     progressEndValue = progressValue.outerText,
    //     speed = 100;

    // let progress = setInterval(() => {
    //     progressStartValue++;
    //     progressValue.textContent = `${progressStartValue}%`
    //     circularProgress.style.background = `conic-gradient(#9e3685 ${progressStartValue * 3.6}deg, #fdeef1 0deg)`
    //     // console.log(progressStartValue);
    //     if (progressStartValue == progressEndValue) {
    //         clearInterval(progress);
    //     }
    // }, speed);
}