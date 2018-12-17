// ejemplo objeto literal

let usuario1 = {
    nombreLiteral : "beto litera quiroga",
    emailLiteral : "beto@ed.teammm",
    edadLiteral: 44645
}

let nombreusuario1 = usuario1.nombreLiteral
console.log(nombreusuario1)

let usuario2 = {
    nombreLiteral : "Juan",
    apellidoLiteral : "perez",
    correo : "juan@gmail.com",
    edadLiteral: 15
}

// ejemplo objeto- CLASES
class User {
    constructor(nombre,apellido,correo,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.edad = edad
    }
}

let beto = new User("beto","quiroga","bla@gmail.com",28)

console.log(beto)

let alexys = new User("alexys","lozada","alexus@ed.team",40)

console.log(alexys)

// ejemplo MÉTODOS

class User2 {
    constructor(nombre,apellido,correo,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.edad = edad
    }

    saludar() {
        return console.log(`Hola, mi nombre es ${this.nombre}`)
    }
    
    saludarConApellido() {
        return console.log(`Hola mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`)
    }

    cambiarEdad(nuevaEdad) {
        this.edad = nuevaEdad
    }

    saludarEnDOM(){
        return document.write(`
            <div>
                <p>
                Hola, mi nombre es ${this.nombre}
                </p>
            </div>
        `)
    }
}

let beto2 = new User2("beto","quiroga","bla@gmail.com",28)
let alexys2 = new User2("alexys","lozada","alexus@ed.team",40)

// EJEMPLOS HERENCIA

class Profesor extends User2 {
    constructor(nombre, apellido, correo, edad, experiencia, lenguaje){
        super(nombre, apellido, correo, edad)
        this.experiencia = experiencia 
        this.lenguaje = lenguaje
    }
}

class Estudiante extends User2 {
    constructor(apellido, correo, edad, activado ){
        super(apellido, correo, edad)
        this.activado = activado
    }
}

let alvaro = new Profesor ("Alvaro","Felipe","alvaro@ed.team", 50, 5, "JavaScript")

console.log(alvaro)