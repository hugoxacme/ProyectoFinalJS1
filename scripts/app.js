import Ingreso from './ingreso.js';
import Egreso from './egreso.js';

// Arreglos para manejar los ingresos y egresos
let ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000)
];

const egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];

// Función para calcular total de ingresos
const totalIngresos = () => {
    return ingresos.reduce((total, ingreso) => total + ingreso.valor, 0);
};

// Función para calcular total de egresos
const totalEgresos = () => {
    return egresos.reduce((total, egreso) => total + egreso.valor, 0);
};

// Función para formatear a moneda
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
    });
};

// Función para formatear a porcentaje
const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2,
    });
};

const cargarCabecero = () => {
    const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgreso = (totalEgresos() / totalIngresos()) * 100 || 0;

    // Actualiza el HTML con los valores formateados
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
};

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (const ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

// Función para crear el HTML de un ingreso
const crearIngresoHTML = (ingreso) => {
    return `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar_btn" onclick="eliminarIngreso(${ingreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
};

const cargarEgresos = () => {
    let egresosHTML = '';
    for (const egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

// Función para crear el HTML de un egreso
const crearEgresoHTML = (egreso) => {
    return `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar_btn" onclick="eliminarEgreso(${egreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
};

// Función para eliminar un ingreso
const eliminarIngreso = (id) => {
    const indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    if (indiceEliminar !== -1) {
        ingresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarIngresos();
    }
};

// Función para eliminar un egreso
const eliminarEgreso = (id) => {
    const indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    if (indiceEliminar !== -1) {
        egresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarEgresos();
    }
};

// Función para agregar un nuevo ingreso o egreso
const agregarDato = () => {
    const forma = document.getElementById('forma');
    const tipo = forma.querySelector('#tipo').value;
    const descripcion = forma.querySelector('#descripcion').value;
    const valor = parseFloat(forma.querySelector('#valor').value);

    
    if (descripcion === '' || isNaN(valor) || valor <= 0) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }


    if (tipo === 'ingreso') {
        ingresos.push(new Ingreso(descripcion, valor));
    } else {
        egresos.push(new Egreso(descripcion, valor));
    }

    
    forma.querySelector('#descripcion').value = '';
    forma.querySelector('#valor').value = '';

    
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};


const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};


window.onload = cargarApp;


window.eliminarIngreso = eliminarIngreso;
window.eliminarEgreso = eliminarEgreso;
window.agregarDato = agregarDato;
