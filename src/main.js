//crear clase persona
class Persona {
    constructor(nombres, apellidos,genero,fechaNacimiento){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
    }

    //método para obtener la edad
    getEdad(){
        let hoy = new Date();
        let cumpleanos = new Date(this.fechaNacimiento);
        let edad = hoy.getFullYear() - cumpleanos.getFullYear();
        let mes = hoy.getMonth() - cumpleanos.getMonth();
        if(mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())){
            edad--;
        }
        return edad;
    }

}

//crear clase cliente que extienda persona
class Cliente extends Persona{
    constructor(nombres, apellidos,genero,fechaNacimiento,pais,ciudad,numeroCliente){
        super(nombres, apellidos,genero,fechaNacimiento,pais,ciudad);
        this.numeroCliente = numeroCliente;
    }

    //crear método para obtener el número de cliente
    getNumeroCliente(){
        return this.numeroCliente;
    }
    //crear método para obtener los datos del cliente
    getDatosCliente(){
        return `Nombre: ${this.nombres} ${this.apellidos} Edad: ${this.getEdad()} País: ${this.pais} Ciudad: ${this.ciudad} Número de cliente: ${this.getNumeroCliente()}`;
    }
}

//crear clase cuentaBanco que extienda cliente
class CuentaBanco extends Cliente{
    constructor(nombres, apellidos,genero,fechaNacimiento,pais,ciudad,numeroCliente,saldo){
        super(nombres, apellidos,genero,fechaNacimiento,pais,ciudad,numeroCliente);
        this.saldo = saldo;
    }

    //crear método para obtener el saldo
    getSaldo(){
        return this.saldo;
    }

    //crear método para depositar
    depositar(monto){
        this.saldo += monto;
    }

    //crear método para retirar
    retirar(monto){
        if(this.saldo >= monto){
            this.saldo -= monto;
        }else{
            console.log(`No tienes saldo suficiente. Tu saldo actual es de: ${this.saldo}`);
        }
    }
}

const optionCrearCuenta = document.getElementById("optionCrearCuenta");
const menuPrincipal = document.getElementById("menuPrincipal");
const menuCrearCuenta = document.getElementById("menuCrearCuenta");

optionCrearCuenta.addEventListener("click", crearCuenta);

function crearCuenta(){
menuPrincipal.style.display = "none";
    menuCrearCuenta.style.display = "block";

}


