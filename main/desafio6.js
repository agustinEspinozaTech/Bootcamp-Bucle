console.log('Ejercicio A');


for (cantidadDegatos = 1; cantidadDegatos <= 10; cantidadDegatos++) {
    resultado = cantidadDegatos +
        (cantidadDegatos % 3 == 1 ? '😺' : '') +
        (cantidadDegatos % 3 == 2 ? '😸' : '') +
        (cantidadDegatos % 3 == 0 ? '😹' : '')
    console.log('Gato #', resultado);

}
console.log('Ejercicio B');


var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (contador = 1; contador <= cantidadDeGatos; contador++) {
    var huellas = ''
    for (contadorHuellas = 1; contadorHuellas <= cantidadDePasos; contadorHuellas++) {
        huellas += '🐾'

        console.log('Gato #' + contador + ': 🐈' + huellas);
    }

}
