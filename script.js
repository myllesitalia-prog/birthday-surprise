// ===============================
// ELEMENTS
// ===============================

const gift = document.getElementById("gift");
const envelope = document.getElementById("envelope");
const nextBtn = document.getElementById("nextBtn");

const surprise = document.getElementById("surpriseSound");
const birthday = document.getElementById("birthdayMusic");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

const typing = document.getElementById("typing");

// ===============================
// LETTER
// ===============================

const message = `💌 Happy Birthday, Ayieza! ❤️🎂

I know we've only been friends for a short time, but I'm truly grateful we met. Thank you for your kindness, laughter, and the happy moments we've shared.

I know this past month hasn't been easy. Just remember that what happened doesn't define who you are. You deserve to be appreciated, respected, and genuinely cared for.

As you celebrate your birthday, I hope your heart continues to heal little by little. Keep believing in yourself, keep chasing your dreams, and never lose hope. Better days are waiting for you.

I hope one day you'll find someone who will stay with you—not only during the happy moments, but also through the hardest days and every challenge life brings.

Thank you for being my friend. I hope this little surprise made you smile, even just a little. 😊

Happy Birthday once again! I wish you happiness, peace, good health, and a future filled with love and beautiful memories.

Yours truly,
Jensen Mylles U. Italia`;

let i = 0;

// ===============================
// TYPEWRITER
// ===============================

function typeWriter() {
    if (i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}

// ===============================
// MUSIC FADE IN
// ===============================

function fadeInMusic() {

    birthday.volume = 0;
    birthday.play();

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.05;

        if (volume >= 1) {
            volume = 1;
            clearInterval(fade);
        }

        birthday.volume = volume;

    }, 200);

}

// ===============================
// FIREWORKS
// ===============================

function startFireworks() {

    const duration = 8000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 4,
            spread: 90,
            startVelocity: 45,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.6
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}

// ===============================
// SPARKLES
// ===============================

function sparkle() {

    const cake = document.getElementById("cake");
    const rect = cake.getBoundingClientRect();

    const star = document.createElement("div");

    star.className = "sparkle";
    star.innerHTML = "✨";

    star.style.left = rect.left + Math.random() * rect.width + "px";
    star.style.top = rect.top + Math.random() * rect.height + "px";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1000);

}

let sparkleInterval;

// ===============================
// GIFT CLICK
// ===============================

gift.onclick = () => {

    surprise.currentTime = 0;
    surprise.play();

    page1.classList.add("fade-out");

    setTimeout(() => {

        page1.style.display = "none";

        page2.style.display = "flex";
        page2.classList.add("fade-in");

        setTimeout(fadeInMusic, 1200);

        startFireworks();

        sparkleInterval = setInterval(sparkle, 150);

    }, 700);

};

// ===============================
// NEXT BUTTON
// ===============================

nextBtn.onclick = () => {

    birthday.pause();
    birthday.currentTime = 0;

    clearInterval(sparkleInterval);

    page2.style.display = "none";
    page3.style.display = "flex";

};

// ===============================
// ENVELOPE CLICK
// ===============================

envelope.onclick = () => {

    page3.classList.remove("fade-in");
    page3.classList.add("fade-out");

    setTimeout(() => {

        page3.style.display = "none";

        page4.style.display = "flex";
        page4.classList.add("fade-in");

        typing.innerHTML = "";
        i = 0;

        typeWriter();

    }, 600);

};

// ===============================
// LOADING SCREEN
// ===============================

window.onload = () => {

    setTimeout(() => {

        document.getElementById("loadingScreen").style.display = "none";

    }, 4000);

};