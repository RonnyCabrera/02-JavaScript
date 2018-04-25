var nombre = 'Adrian';
nombre = 'Vicente';
var cedula = '1718137159';
// cedula = '132123121123'; No hay como
var apellido = 'Eguez'; // duck Typing
apellido = 1;
apellido = {};
var edad = 1;
var casado = false;
var fechaNacimiento = new Date();
var usuario = {
    nombre: 'Adrian',
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
var adrian = new Usuario('Adrian', 28);
console.log(adrian.imprimirUsuario('Hola!'));
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
var vicente = new UsuarioDos('Vicente', 28);
console.log('vicente', vicente);
vicente.edad = 23;
var carlos = {
    nombre: 'Carlos',
    edad: 18,
    esposa: new Usuario('Carla', 19)
};
