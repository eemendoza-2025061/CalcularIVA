export function calcularIVA(subtotal, Iva = 0.12) {
    let impuesto = subtotal * Iva;
    return impuesto;
}
