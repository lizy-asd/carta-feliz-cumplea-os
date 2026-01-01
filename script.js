const card = document.getElementById('carta');
const wrapper = document.querySelector('.card-wrapper');

let isOpen = false;

card.addEventListener('click', () => {
    isOpen = !isOpen;
    card.classList.toggle('open', isOpen);

    if (isOpen) {
        launchSparkles();
    }
});

/**
 * Genera partículas doradas/neón alrededor de la tarjeta
 */
function launchSparkles() {
    const colors = [
        '#facc15', // dorado
        '#f97316', // neón naranjo
        '#e11d48', // neón rosado
        '#22c55e', // verde neón
        '#0ea5e9', // celeste neón
        '#a855f7'  // morado neón
    ];

    const sparkleCount = 24;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Posición aleatoria alrededor de la carta
        const offsetX = Math.random() * 100; // 0–100% ancho
        const offsetY = 10 + Math.random() * 80; // 10–90% alto

        sparkle.style.left = `${offsetX}%`;
        sparkle.style.top = `${offsetY}%`;

        // Color neón aleatorio
        const color = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
        sparkle.style.boxShadow = `0 0 14px ${color}`;

        // Pequeña variación de tamaño y duración
        const size = 6 + Math.random() * 10;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        const duration = 900 + Math.random() * 700;
        sparkle.style.animationDuration = `${duration}ms`;

        wrapper.appendChild(sparkle);

        // Eliminar del DOM al terminar
        setTimeout(() => {
            sparkle.remove();
        }, duration + 200);
    }
}
