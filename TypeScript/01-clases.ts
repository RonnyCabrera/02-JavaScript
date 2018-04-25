let nombre: string = 'Adrian';
nombre = 'Vicente';
const cedula = '1718137159';
// cedula = '132123121123'; No hay como
let apellido: any = 'Eguez'; // duck Typing
apellido = 1;
apellido = {};

let edad: number = 1;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();

let usuario = {
    nombre: 'Adrian',
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

let adrian = new Usuario('Adrian', 28);
console.log(adrian.imprimirUsuario('Hola!'));

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


let vicente = new UsuarioDos('Vicente', 28);
console.log('vicente', vicente);

vicente.edad = 23;

interface UsuarioTres {
    nombre: string;
    edad: number;
    esposa: Usuario
}

let carlos: UsuarioTres = {
    nombre: 'Carlos',
    edad: 18,
    esposa: new Usuario('Carla',19)
};