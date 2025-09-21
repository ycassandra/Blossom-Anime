// Variables para identificar los textos
let textoKimetsu = document.querySelector('.main-text');
let textoAttack = document.querySelector('.secondary-text');
let textoDress = document.querySelector('.third-text');

function siguienteSeccion() {
    console.log("¡Click detectado!");
    
    // Encontrar cuál texto fue clickeado
    let textoClickeado = event.target.closest('.text-item');
    console.log("Texto clickeado:", textoClickeado);
    
    // Encontrar cuál texto está actualmente en el centro
    let textoEnCentro = document.querySelector('.pos-centro');
    console.log("Texto en centro:", textoEnCentro);
    
    // Solo intercambiar si el clickeado NO está en el centro
    if (textoClickeado !== textoEnCentro) {
        console.log("Haciendo intercambio...");
        intercambiarConCentro(textoClickeado, textoEnCentro);
    } else {
        console.log("Ya está en el centro, no hacer nada");
    }
}

function intercambiarConCentro(textoClickeado, textoEnCentro) {
    // Quitar todas las clases de posición de ambos textos
    textoClickeado.classList.remove('pos-arriba', 'pos-centro', 'pos-abajo');
    textoEnCentro.classList.remove('pos-arriba', 'pos-centro', 'pos-abajo');
    
    // El clickeado va al centro
    textoClickeado.classList.add('pos-centro');
    console.log("Texto clickeado ahora en centro");
    
    // El que estaba en centro va a donde estaba el clickeado
    if (textoClickeado === textoKimetsu || textoClickeado === textoAttack) {
        // Si clickearon arriba, el del centro va arriba
        textoEnCentro.classList.add('pos-arriba');
        console.log("Texto del centro ahora arriba");
    } else {
        // Si clickearon abajo, el del centro va abajo  
        textoEnCentro.classList.add('pos-abajo');
        console.log("Texto del centro ahora abajo");
    }
}