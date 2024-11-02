class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion; // Atributo privado
        this._valor = valor; // Atributo privado
    }

    // Getter para el atributo descripcion
    get descripcion() {
        return this._descripcion;
    }

    // Setter para el atributo descripcion
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    // Getter para el atributo valor
    get valor() {
        return this._valor;
    }

    // Setter para el atributo valor
    set valor(valor) {
        this._valor = valor;
    }
}

export default Dato; // Exporta la clase para que pueda ser utilizada en otros módulos
