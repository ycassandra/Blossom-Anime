const flowerImage = document.getElementById('flowerImage');
const instructionText = document.querySelector('.instruction');
let clickCount = 0;
let gifsVisible = false; // variable para saber si gifs están visibles

// Efectos al hacer click en la flor - ¡GIFS DE ANIME FLOTANTES!
flowerImage.addEventListener('click', function() {
    clickCount++;
    // Ocultar el texto de instrucción al hacer clic en la flor
if (instructionText) {
    instructionText.style.opacity = '0';
    instructionText.style.transform = 'scale(0.8)';
}

    // Limpiar gifs anteriores si existen
    const oldGifs = document.querySelectorAll('.anime-gif-container');
    oldGifs.forEach(gif => gif.remove());
    
    // Efecto de giro en la flor
    flowerImage.style.animation = 'spin 1s linear, float 3s ease-in-out infinite';

    if (!gifsVisible) {
        //si no estan visibles
        createAnimeGifs();
        createSparkles(); // Brillitos blancos
        gifsVisible = true;
    } else {
        // si estan visibles, ocultarlos
        closeAnimeGifs();
        gifsVisible = false;
    }

    // Restaurar animación de flotación
    setTimeout(() => {
        flowerImage.style.animation = 'float 3s ease-in-out infinite';
    }, 1000);
});

//funcion para cerrar/ocultar los gifs
function closeAnimeGifs() {
    const gifs = document.querySelectorAll('.anime-gif-container');
    gifs.forEach((gif, index) => {
        setTimeout(() => {
            gif.classList.remove('show');
            gif.classList.add('hide');

            //Eliminar despues la animación 
            setTimeout(() => {
                if (gif.parentNode) {
                    gif.parentNode.removeChild(gif);
                }
            }, 500);
        }, index * 100); // Delay progresivo para que se vayan uno por uno
    });
}

// Crear gifs de anime que flotan en posiciones fijas
function createAnimeGifs() {
    const rect = flowerImage.getBoundingClientRect();

    // datos de GIFs de anime con sus nombres
    const animeData = [
        {
            gif: 'https://i.pinimg.com/originals/75/b7/ee/75b7ee56e043ad3a4c7f569959b4ae92.gif', 
            name: 'Kimetsu no Yaiba'
        },
        {        
            gif: 'https://i.pinimg.com/originals/46/38/3a/46383a964f01d5cdfe9ebad32f16dfeb.gif', 
            name: 'Kakegurui'
        },
        {
            gif: 'https://i.pinimg.com/originals/c1/c2/42/c1c242a44d69301f62d60d14b162b62c.gif', 
            name: 'Jujutsu Kaisen'
        },
        {
            gif: 'https://i.pinimg.com/originals/70/18/cb/7018cb310d2d021ce38a1572231b3473.gif', 
            name: 'Michiko Malandro'
        },
        {
            gif: 'https://i.pinimg.com/originals/e3/de/a4/e3dea4bb215f524375e7ec26d3270570.gif', 
            name: 'Naruto'
        },
        {
            gif: 'https://i.pinimg.com/originals/8d/15/59/8d1559e6b5cef39b02e18c0f082963ac.gif', 
            name: 'Dragon Ball'
        },
        {
            gif: 'https://i.pinimg.com/originals/21/de/1f/21de1fb217e49d3bc6eb98222f8406dc.gif', 
            name: 'Hajime no Ippo'
        },
        {
            gif: 'https://i.pinimg.com/originals/2b/d7/60/2bd760b80e12967ef7221a80b58bbd36.gif', 
            name: 'Baki'
        }
    ];

    // posiciones fijas alrededor de la pantalla
    const positions = [
        { x: window.innerWidth * 0.15, y: window.innerHeight * 0.2 }, // Arriba izquierda
        { x: window.innerWidth * 0.85, y: window.innerHeight * 0.2 }, // Arriba derecha
        { x: window.innerWidth * 0.1, y: window.innerHeight * 0.5 },  // medio izquierda
        { x: window.innerWidth * 0.9, y: window.innerHeight * 0.5 },  // medio derecha
        { x: window.innerWidth * 0.2, y: window.innerHeight * 0.8 },  // abajo izquierda
        { x: window.innerWidth * 0.8, y: window.innerHeight * 0.8 },  // abajo derecha
        { x: window.innerWidth * 0.5, y: window.innerHeight * 0.1 },  // arriba centro
        { x: window.innerWidth * 0.5, y: window.innerHeight * 0.9 }   // abajo centro
    ];

    for (let i = 0; i < Math.min(animeData.length, positions.length); i++) {
        setTimeout(() => {
            const container = document.createElement('div');
            container.className = 'anime-gif-container';
            
            const gif = document.createElement('img');
            gif.className = 'anime-gif';
            gif.src = animeData[i].gif;

            const name = document.createElement('div');
            name.className = 'anime-name';
            name.textContent = animeData[i].name;

            container.appendChild(gif);
            container.appendChild(name);

            container.style.left = positions[i].x - 40 + 'px';
            container.style.top = positions[i].y - 40 + 'px';

            document.body.appendChild(container);

            // Animación de aparición
            setTimeout(() => {
                container.classList.add('show');
            }, 100);
        }, i * 400); // Delay entre aparición
    }
}

// crear brillitos mágicos
function createSparkles() {
    const rect = flowerImage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = centerX + (Math.random() - 0.5) * 150 + 'px';
        sparkle.style.top = centerY + (Math.random() - 0.5) * 150 + 'px';
        sparkle.style.animation = 'sparkle 1.5s ease-out forwards';
        sparkle.style.animationDelay = Math.random() * 0.8 + 's';

        // colores de brillitos aleatorios
        sparkle.style.background = '#ffffff'
        sparkle.style.boxShadow = '0 0 6px rgba(255, 255, 255, 0.8)';
        document.body.appendChild(sparkle);
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);    
    }
}

// función para crear petalos pixel que caen
function createFallingPetal() {
    const petal = document.createElement('div');
    petal.className = 'falling-petal';

    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.top = '-20px';
    const duration = 4000 + Math.random() * 3000;
    petal.style.animation = `pixelFall ${duration}ms linear`;

    // colores pixel rosa más definidos
    const pixelColors = ['#ff1744', '#e91e63', '#ff6b9d', '#f48fb1', '#c2185b', '#ad1457'];
    petal.style.background = pixelColors[Math.floor(Math.random() * pixelColors.length)];

    // hacer algunos petalos más grandes ocasionalmente 
    if (Math.random() < 0.3) {
        petal.style.width = '4px';
        petal.style.height = '4px';
    }

    // añadir sombra pixel ocasional
    if (Math.random() < 0.5) {
        const shadowColor = pixelColors[Math.floor(Math.random() * pixelColors.length)];
        petal.style.boxShadow = `2px 2px 0 ${shadowColor}`;
    }

    document.body.appendChild(petal);
    setTimeout(() => {
        if (petal.parentNode) {
            petal.parentNode.removeChild(petal);
        }
    }, duration);
}

// Crear pétalos cada cierto tiempo
setInterval(createFallingPetal, 300);

// Crear algunos pétalos iniciales
for (let i = 0; i < 10; i++) {
    setTimeout(createFallingPetal, i * 200);
}

const gif = document.querySelector('.gif');

gif.classList.add('gif-desaparecer');

gif.addEventListener('animationend', () => {
  gif.remove(); // Elimina el GIF del DOM después de la animación
});

// Crear pétalos cada cierto tiempo
setInterval(createFallingPetal, 300);

// Crear algunos pétalos iniciales
for (let i = 0; i < 10; i++) {
    setTimeout(createFallingPetal, i * 200);
}
