 fdocument.addEventListener('DOMContentLoaded', function() {

 //valores ID del formulario

const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const imagenURL = document.getElementById('imagenURL')
const submitButton = document.getElementById('submit-button')
const resultadoDiv = document.getElementById('resultado')
const borrarContacto = document.getElementById('borrar-contacto')


}
//guardar el contacto en el localStorage
function guardarContacto(name, email, message, imagenURL) {
    const contacto = { nmae, email, message, imagenURL }
    localStorage.setItem('contacto', JSON.stringify(contacto))
       
    }

//mostrar el contacto guardado en el localStorage
function mostrarContacto() {
    const contactoGuardado = JSON.parse(localStorage.getItem('contacto'))
    if (contactoGuardado) {
        resultadoDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${contactoGuardado.name}</p>
        <p><strong>Email:</strong> ${contactoGuardado.email}</p>
        <p><strong>Mensaje:</strong> ${contactoGuardado.message}</p>
        <p><strong>Imagen URL:</strong> <img src="${contactoGuardado.imagenURL}"></p>
        `
    } 
} 

//Extra
//guardar en localStore los datos de contactos enviados de cada ususario
localStorage.setItem('contacto', JSON.stringify(contacto))

//Mostrar los datos de contacto guardados en el localStorage
function mostrarContacto() {
    const contactoGuardado = JSON.parse(localStorage.getItem('contacto'))
    if (contactoGuardado) {
        resultadoDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${contactoGuardado.name}</p>
        <p><strong>Email:</strong> ${contactoGuardado.email}</p>
        <p><strong>Mensaje:</strong> ${contactoGuardado.message}</p>
        <p><strong>Imagen URL:</strong> <img src="${contactoGuardado.imagenURL}"></p>
        `
    } 
}

//funcion para borrar todos los contactos
borrarContactos.Button.addEventListener('click', function() {
    localStorage.clear()
    resultadoDiv.innerHTML = ''

})
