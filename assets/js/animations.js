// Create flying birds
function createBirds() {
    const heroSection = document.querySelector('.mountain-scene');
    for (let i = 0; i < 5; i++) {
        const bird = document.createElement('div');
        bird.className = 'bird';
        bird.innerHTML = `<img src="./assets/svg/birds/bird${i % 3}.svg" alt="Flying bird">`;
        bird.style.top = `${20 + (Math.random() * 60)}%`;
        bird.style.animationDuration = `${10 + (Math.random() * 20)}s`;
        bird.style.animationDelay = `${Math.random() * 5}s`;
        heroSection.appendChild(bird);
    }
}

window.addEventListener('load', createBirds);