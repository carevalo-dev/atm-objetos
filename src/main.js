//crear clase persona
class Persona {
    constructor(nombres, apellidos,genero,fechaNacimiento,pais,ciudad){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.pais = pais;
        this.ciudad = ciudad;
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

    //crear metodo para obtener el numero de cliente
    getNumeroCliente(){
        return this.numeroCliente;
    }
    //crear metodo para obtener los datos del cliente
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

    //crear metodo para obtener el saldo
    getSaldo(){
        return this.saldo;
    }

    //crear metodo para depositar
    depositar(monto){
        this.saldo += monto;
    }

    //crear metodo para retirar
    retirar(monto){
        if(this.saldo >= monto){
            this.saldo -= monto;
        }else{
            console.log(`No tienes saldo suficiente. Tu saldo actual es de: ${this.saldo}`);
        }
    }
}