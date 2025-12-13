function createHearts() {
    const confettiContainer = document.querySelector('.confetti');
    const symbols = ['❤️', '✨', '🌟']; // Hearts and stars for birthday vibes
    for (let i = 0; i < 80; i++) { // More for fuller effect
        const elem = document.createElement('div');
        elem.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        elem.style.position = 'absolute';
        elem.style.fontSize = `${Math.random() * 25 + 15}px`;
        elem.style.color = '#ffd700'; // Gold color
        elem.style.left = `${Math.random() * 100}%`;
        elem.style.top = '-50px';
        elem.style.opacity = Math.random() * 0.6 + 0.4;
        elem.style.animation = `fall ${Math.random() * 6 + 4}s linear infinite`;
        elem.style.animationDelay = `${Math.random() * 5}s`;
        elem.style.transform = `rotate(${Math.random() * 360}deg)`;
        elem.style.textShadow = '0 0 10px #ffd700'; // Glowing symbols
        confettiContainer.appendChild(elem);
    }
}

window.onload = createHearts;

const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to { 
            transform: translateY(100vh) rotate(720deg); 
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);