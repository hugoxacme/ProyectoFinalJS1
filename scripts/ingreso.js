import Dato from './dato.js'; // Asegúrate de que la ruta es correcta

class Ingreso extends Dato {
    static contadorIngresos = 0; // Variable estática para contar ingresos

    constructor(descripcion, valor) {
        super(descripcion, valor); // Inicializa el objeto de la clase padre
        this._id = ++Ingreso.contadorIngresos; // Asigna el ID usando preincremento
    }

    // Getter para el atributo id
    get id() {
        return this._id;
    }
}

export default Ingreso; // Exporta la clase para que pueda ser utilizada en otros módulos
