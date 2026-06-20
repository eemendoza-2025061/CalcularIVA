Documentación de las Funciones
1. calcularSubtotal
Esta función se encarga de sumar el precio de varios productos para obtener un monto total antes de impuestos.
Propósito: Sumar una lista de precios individuales.
Parámetros: 
precios: Un arreglo de números (number[]). Representa el costo de cada producto guardado en el sistema.
Valor de retorno: Un número (number) que representa la suma total de todos los precios ingresados.
2. calcularIVA
Esta función calcula el valor del impuesto (IVA) que se le debe aplicar a un monto determinado.
Propósito: Calcular el impuesto del valor agregado basado en un subtotal.
Parámetros:
subtotal: Un número (number) que representa el valor base del producto.
Iva: Un número (number). Es el porcentaje de impuesto a aplicar. Si no se envía este dato, la función usa el 0.12 (12%).
Valor de retorno:
Un número (number) que equivale únicamente a la cantidad de dinero que se pagará de impuesto.
3. calcularTotal
Esta función une el costo del producto y su impuesto para obtener el precio final de venta.
Propósito: Combinar el subtotal y el IVA para obtener el monto final a pagar.
Parámetros:
subtotal: Un número (number) con el valor base del producto.
iva: Un número (number) con el valor del impuesto previamente calculado.
Valor de retorno:
Un número (number) que es el resultado de sumar el subtotal más el iva.