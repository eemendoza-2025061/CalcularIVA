export function calcularIVA(subtotal: number, Iva: number = 0.12): number {
    let impuesto = subtotal * Iva;
    return impuesto;
}