class Forma {
    constructor(alto, ancho, color){
        this.alto = alto
        this.ancho = ancho
        this.color = color
    }

    dibujar(){
        return document.body.innerHTML = `
    <div
        style="
        width : ${this.ancho}px;
        height : ${this.alto}px;
        background : ${this.color}"
    >
    </div>
    `   
    }
}

//  Mi solución:

class FormaCuadrado extends Forma {
    constructor(alto, ancho, color){
        super (alto, ancho, color)
    }

    dibujaCuadrado(){
        return document.body.innerHTML = `
        <div
            style="
            width : ${this.alto}px;
            height : ${this.alto}px;
            background : ${this.color}"
        >
        </div>
        `
    }
}

class FormaCirculo extends Forma {
    constructor(alto, ancho, color){
        super (alto, ancho, color)
    }
    /* dibujaCirculo(){
        return document.body.innerHTML = `
        <div
            style="
            width : ${this.alto}px;
            height : ${this.alto}px;
            background : ${this.color};
            border-radius: 50% "
        >
        </div>
        ` */
    dibujar(){
        return document.body.innerHTML = `
        <div
            style="
            width : ${this.alto}px;
            height : ${this.alto}px;
            background : ${this.color};
            border-radius: 50% "
        >
        </div>
        `
        }
    
}

class FormaRectangulo extends Forma {
    constructor(alto, ancho, color){
        super (alto, ancho, color)   
    }

    dibujaRectangulo(){
        return document.body.innerHTML = `
        <div
            style="
            width :${this.alto * 2 }px;
            height : ${this.alto}px;
            background : ${this.color}"
        >
        </div>
        `
    }
}


let figura1 = new FormaCuadrado(130, 12321312, "red")
let figura2 = new FormaCirculo(130,213123,"blue")
let figura3 = new FormaRectangulo(130,432534,"green")

// SOLUCION PROFESOR:

class Cuadrado extends Forma {
    constructor ( lado , color){
        super (lado,lado,color)
    }
}

let figuraCuadrada = new Cuadrado(130,"purple")
let figuraCircular = new FormaCirculo (130,12321,"orange")


