console.log('Hola mundo!');
var mutar; // undefined
var nombre = 'Ronny';
mutar = nombre;
var edad = 22;
mutar = edad;
var deudas = 223.438;
mutar = deudas;
var fechaNacimiento = new Date();
mutar = fechaNacimiento;
var casado = false;
muter = casado;
var estoyVacio = null; // false
var noEstoyDefinido = undefined; // false
// null undefined 0 -1 1
// -1 -> true 0 -> false 1 -> true
if (estoyVacio) {
    console.log('Verdadero');
} else {
    console.log('Falso');
}

// Json
// ctrl + a = seleccionar
// ctrl + alt + l = formatear
var usuario = {
    "nombre": "Ronny",
    apellido: 'Cabrera',
    edad: sumarDosNumeros(14, 14),
    imprimirEnConsola: sumarDosNumeros
    // imprimirEnConsola: function(){
    //     console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    // }
};
console.log(usuario.nombre); // "Adrian"
console.log(usuario); // ????
delete usuario.edad;
console.log(usuario);
usuario.cedula = '1723029665';
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = 'Spod';
console.log(usuario);
console.log(typeof nombre); // "string"
console.log(typeof edad); // "number"
console.log(typeof casado); // "boolean"
console.log(typeof fechaNacimiento); // "object"
console.log(typeof usuario); // "object"

// no se puede definir nombre en undefined

function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumarDosNumeros(1, 2, 3, 4, 5, 6, 7)); // 3
var sumarDosNumerosVersionDos = function noImportaSiEscriboElNombre(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
// Funcion anonima
var sumarDosNumerosVersionTres = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
mutar = sumarDosNumeros;

console.log(usuario.imprimirEnConsola); //

var arreglo = [
    1,
    2,
    3,
    "Ronny",
    2.2,
    true,
    undefined,
    null,
    {
        nombre:"Santiago"
    },
    sumarDosNumeros(1,2),
    sumarDosNumeros,
    [1,2,3,true]
];