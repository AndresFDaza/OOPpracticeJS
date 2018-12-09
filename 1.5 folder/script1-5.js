//cliente de EDteam

const clienteEDteam = {
    nombre : "Andres",
    apellido : "Daza",
    email : "andresdaza04@hot.com",
    pass: "gr%&#$56´h+53/",
}

console.log(clienteEDteam)

//sintaxis punto

console.log(clienteEDteam.nombre)

//sintaxis corchetes

console.log(clienteEDteam["nombre"])

//atributos dinámicos

let name = "nombre"
let surn = "ape"
let ame = "llido"

const tabla = {
    [name] : "Andres",
    [`${surn}${ame}`] : "Daza"
}

console.log(tabla)