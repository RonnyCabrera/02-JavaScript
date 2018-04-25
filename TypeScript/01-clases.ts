let nombre: string = 'Ronny';
nombre = 'Cabrera';
const cedula = '1723026995';
// cedula = '17230265592'; No hay como
let apellido: any = 'Eguez'; // duck Typing
apellido = 1;
apellido = {};

let edad: number = 1;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();

let usuario = {
    nombre: 'Ronny',
    edad: 28
};

class Usuario {
    nombre: string;
    private edad: number;

    constructor(mNombre: string, mEdad: number) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }

    imprimirUsuario(saludo: string): string {
        //template strings
        return `${saludo}. Mi nombre es: ${this.nombre}, y mi edad es: ${this.edad}`;
    }


}

let ronny = new Usuario('Ronny', 23);
console.log(ronny.imprimirUsuario('Hola!'));

//console.log(usuario);
class UsuarioDos {

    constructor(public nombre: string,
                private _edad: number,
                public esposo?:UsuarioDos) {
    }

    get edad(): number {
        return this._edad;
    }

    set edad(nuevaEdad: number) {
        // cambiar los datos o transformarlos
        this._edad = nuevaEdad;
    }

}


let cabrera = new UsuarioDos('Cabrera', 23);
console.log('Cabrera', cabrera);

cabrera.edad = 20;

interface UsuarioTres {
    nombre: string;
    edad: number;
    esposa: Usuario
}

let carlos: UsuarioTres = {
    nombre: 'Santiago',
    edad: 18,
    esposa: new Usuario('Eli',19)
};