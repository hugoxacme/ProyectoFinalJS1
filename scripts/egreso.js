import Dato from './dato.js'; // Asegúrate de que la ruta es correcta

class Egreso extends Dato {
    static contadorEgresos = 0; // Variable estática para contar egresos

    constructor(descripcion, valor) {
        super(descripcion, valor); // Inicializa el objeto de la clase padre
        this._id = ++Egreso.contadorEgresos; // Asigna el ID usando preincremento
    }

    // Getter para el atributo id
    get id() {
        return this._id;
    }
}

export default Egreso; // Exporta la clase para que pueda ser utilizada en otros módulos
