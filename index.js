    const sceneParticles = {
            0: ['💌', '💖', '💝', '🌸'],
            1: ['✨', '💫', '⭐'],
            2: ['🔥', '💥', '✨'],
            3: ['⚡', '🌩️', '☁️', '💔'],
            4: ['💭', '🌫️'],
            5: ['💔', '😢'],
            6: ['👀', '💭'],
            7: ['🗺️', '✈️'],
            8: ['💌', '💕', '💖'],
            9: ['💬', '🤝'],
            10: ['💕', '❤️', '💖'],
            11: ['💑', '💕', '❤️'],
            12: ['💌', '✉️', '💝']
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    const idx = Array.from(document.querySelectorAll('.scene')).indexOf(entry.target);
                    if (sceneParticles[idx]) {
                        createParticles(entry.target, sceneParticles[idx]);
                    }
                }
            });
        }, { threshold: 0.2 });

        function createParticles(scene, symbols) {
            const container = scene.querySelector('.particles');
            if (!container) return;
            
            for (let i = 0; i < symbols.length * 3; i++) {
                setTimeout(() => {
                    const p = document.createElement('div');
                    p.className = 'particle';
                    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                    p.style.left = Math.random() * 100 + '%';
                    p.style.top = Math.random() * 80 + 10 + '%';
                    p.style.animationDelay = Math.random() * 0.5 + 's';
                    container.appendChild(p);
                    setTimeout(() => p.remove(), 5000);
                }, i * 200);
            }
        }

        document.querySelectorAll('.scene').forEach(scene => observer.observe(scene));

        // Hero particles
        const heroSymbols = ['💌', '💖', '💝', '🌸', '✉️', '💐'];
        const heroContainer = document.getElementById('hero-particles');
        setInterval(() => {
            const p = document.createElement('div');
            p.className = 'particle';
            p.textContent = heroSymbols[Math.floor(Math.random() * heroSymbols.length)];
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 80 + 10 + '%';
            heroContainer.appendChild(p);
            setTimeout(() => p.remove(), 5000);
        }, 800);

        // Fireworks
        const fireworksContainer = document.getElementById('fireworks');
        const fireworkSymbols = ['💥', '✨', '💖', '💕', '💗', '💓', '💝', '🎆', '🎇', '⭐', '💫'];
        
        setInterval(() => {
            const fw = document.createElement('div');
            fw.className = 'firework';
            fw.textContent = fireworkSymbols[Math.floor(Math.random() * fireworkSymbols.length)];
            fw.style.left = Math.random() * 100 + '%';
            fw.style.bottom = '0';
            fw.style.animationDelay = Math.random() * 0.5 + 's';
            fireworksContainer.appendChild(fw);
            setTimeout(() => fw.remove(), 2500);
        }, 300);