console.log('Ejercicio A');


for(cantidadDegatos = 1; cantidadDegatos <=10; cantidadDegatos++){
    resultado = cantidadDegatos +
    (cantidadDegatos % 3 == 1? '😺' : '') +
    (cantidadDegatos % 3 == 2? '😸' : '') +
    (cantidadDegatos % 3 == 0? '😹' : '') 
    console.log('Gato #',resultado);
    
}