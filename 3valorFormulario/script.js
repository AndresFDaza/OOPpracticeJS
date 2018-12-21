
class Usuario{
    constructor(nombre,apellidos, correo, contrasenia){
        this.nombre = nombre
        this.apellidos = apellidos
        this.correo = correo
        this.contrasenia = contrasenia
    }
}

let form1 = document.getElementById("formulario")

form1.addEventListener('submit' , e => {
    e.preventDefault()

    let nombre = e.target.nombre.value
    let apellidos = e.target.apellidos.value
    let correo = e.target.correo.value
    let contrasenia = e.target.contrasenia.value

    let usuario = new Usuario (nombre, apellidos, correo, contrasenia)

    console.log(usuario)

})

