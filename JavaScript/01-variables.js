console.log('Hola Mundo');
var mutar;
var nombre = 'Ronny';
mutar = nombre;
var edad = 23;
mutar = edad;
var deuda = 223.445;
mutar = deauda;
var creado = false;
var estoyVacio = null;
var noEstoyDefinido = undefined;

if (estoyVacio) {
    console.log('Verdadero');
} else {
    console.log('Falso');
}

var usuario = {
    'nombre':
'Ronny',
    'apellido':
'Cabrera',
    //'edad':
//'23',
    edad: sumarDosNumeros(3,3),
    //imprimirEnConsola: function () {
        //console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    //}
};
console.log(usuario.nombre);
console.log(usuario);

delete usuario.edad;
console.log(usuario);

usuario.cedula = '1723029662';
console.log(usuario);

usuario.mascota = {};
usuario.mascota.nombre = 'Spod';
console.log(usuario);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof usuario);

function sumarDosNumeros(numeroUno, numeroDos){
    return numeroUno + numeroDos;
}
mutar = sumarDosNumeros();
console.log(sumarDosNumeros(1,2));

//Funcion Anonima
var sumarDosNumerosVersionDos = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
console.log(sumarDosNumerosVersionDos(2,2));
mutar = sumarDosNumerosVersionDos;

console.log(usuario.imprimirEnConsola);

var arreglo = [
    1,
    2,
    3,
    'Ronny',
    2.2,
    true,
    undefined,
    null,
    {
        nombre:'Eli'
    },
    sumarDosNumeros(2,6),
    sumarDosNumeros,
    [1,2,3,true]
];