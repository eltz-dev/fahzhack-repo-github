function simulate(name, outputId) {
    const output = document.getElementById(outputId);
    output.innerHTML = `[${name}] Initializing...`;
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 20) + 5;
        if (progress >= 100) {
            output.innerHTML = `[${name}] Completed successfully!`;
            clearInterval(interval);
        } else {
            output.innerHTML = `[${name}] Progress: ${progress}%`;
        }
    }, 500);
}

// Admin Cmds
document.getElementById('cmdInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const cmd = this.value.trim().toLowerCase();
        const output = document.getElementById('cmdOutput');

        if (cmd === '/runallfeature') {
            output.innerHTML = "Execute cmds...";
            setTimeout(() => {
                output.innerHTML = "Launching cmds...";
                setTimeout(() => {
                    output.innerHTML = "Running all features...";
                    simulate('DDoS Attack', 'ddosOutput');
                    simulate('Virus Encryptor', 'virusOutput');
                    simulate('Website Attack', 'webOutput');
                    simulate('Port Scanner', 'portOutput');
                }, 3000);
            }, 3000);

        } else if (cmd === '/hidefeature') {
            output.innerHTML = "Execute cmds...";
            setTimeout(() => {
                output.innerHTML = "Launching cmds...";
                setTimeout(() => {
                    document.getElementById('toolsContainer').style.opacity = 0;
                    output.innerHTML = "All features hidden.";
                }, 3000);
            }, 3000);

        } else {
            output.innerHTML = `Unknown command: ${cmd}`;
        }
        this.value = '';
    }
});

// Matrix background animation
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});