import { calcularTotal } from './Total.js';
import { calcularIVA } from './IVA.js';
import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingresa el precio del producto: ", (respuesta) => {
    let subtotal = Number(respuesta);
    if (isNaN(subtotal) || subtotal <= 0) {
        console.log("Ingresa un número válido.");
        rl.close();
        return;
    }
    console.log("\n---Resultado---");
    console.log(`Subtotal ingresado: Q${subtotal.toFixed(2)}`);
    let iva = calcularIVA(subtotal);
    console.log(`IVA : Q${iva.toFixed(2)}`);
    let totalPagar = calcularTotal(subtotal, iva);
    console.log(`Total a pagar: Q${totalPagar.toFixed(2)}`);
    rl.close();
});
