var nombre = 'Ronny';
nombre = 'Cabrera';
var cedula = '1723026995';
// cedula = '17230265592'; No hay como
var apellido = 'Eguez'; // duck Typing
apellido = 1;
apellido = {};
var edad = 1;
var casado = false;
var fechaNacimiento = new Date();
var usuario = {
    nombre: 'Ronny',
    edad: 28
};
var Usuario = /** @class */ (function () {
    function Usuario(mNombre, mEdad) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    Usuario.prototype.imprimirUsuario = function (saludo) {
        //template strings
        return saludo + ". Mi nombre es: " + this.nombre + ", y mi edad es: " + this.edad;
    };
    return Usuario;
}());
var ronny = new Usuario('Ronny', 23);
console.log(ronny.imprimirUsuario('Hola!'));
//console.log(usuario);
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _edad, esposo) {
        this.nombre = nombre;
        this._edad = _edad;
        this.esposo = esposo;
    }
    Object.defineProperty(UsuarioDos.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (nuevaEdad) {
            // cambiar los datos o transformarlos
            this._edad = nuevaEdad;
        },
        enumerable: true,
        configurable: true
    });
    return UsuarioDos;
}());
var cabrera = new UsuarioDos('Cabrera', 23);
console.log('Cabrera', cabrera);
cabrera.edad = 20;
var carlos = {
    nombre: 'Santiago',
    edad: 18,
    esposa: new Usuario('Eli', 19)
};
