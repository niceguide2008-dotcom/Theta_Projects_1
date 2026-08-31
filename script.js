/* =========================================
   OPEN THE MAIN SURPRISE
========================================= */

const openSurpriseBtn = document.getElementById("open-surprise-btn");
const openingScreen = document.getElementById("opening-screen");
const mainContent = document.getElementById("main-content");

openSurpriseBtn.addEventListener("click", () => {

    openingScreen.style.transition = "1s ease";
    openingScreen.style.opacity = "0";

    setTimeout(() => {

        openingScreen.style.display = "none";

        mainContent.classList.remove("hidden");

        document.body.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        launchConfetti();

    }, 900);

});


/* =========================================
   SMOOTH SCROLL BUTTONS
========================================= */

const scrollButtons = document.querySelectorAll(".scroll-btn");

scrollButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId = button.dataset.target;

        const target = document.getElementById(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   LETTER ENVELOPE
========================================= */

const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("open-letter-btn");

openLetterBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    envelope.classList.toggle("open");

});


/* =========================================
   FLIP CARDS
========================================= */

const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});


/* =========================================
   BLOW THE CANDLES
========================================= */

const blowCandlesBtn = document.getElementById("blow-candles-btn");
const candles = document.querySelector(".candles");
const cakeMessage = document.getElementById("cake-message");

blowCandlesBtn.addEventListener("click", () => {

    candles.classList.add("blown");

    blowCandlesBtn.style.display = "none";

    cakeMessage.innerHTML = `
        ✨ Your wish has been sent to the universe. ✨
        <br>
        <strong>May all your dreams come true! ❤️</strong>
    `;

    launchBigConfetti();

});


/* =========================================
   FINAL SURPRISE
========================================= */

const finalSurpriseBtn = document.getElementById("final-surprise-btn");

const celebrationOverlay =
    document.getElementById("celebration-overlay");

const closeCelebrationBtn =
    document.getElementById("close-celebration-btn");


finalSurpriseBtn.addEventListener("click", () => {

    celebrationOverlay.classList.add("active");

    launchMassiveConfetti();

});


closeCelebrationBtn.addEventListener("click", () => {

    celebrationOverlay.classList.remove("active");

});


/* =========================================
   CONFETTI FUNCTIONS
========================================= */

function launchConfetti() {

    confetti({
        particleCount: 100,
        spread: 80,
        origin: {
            y: 0.6
        }
    });

}


function launchBigConfetti() {

    const duration = 2500;
    const end = Date.now() + duration;

    const interval = setInterval(() => {

        confetti({
            particleCount: 20,
            angle: 60,
            spread: 60,
            origin: {
                x: 0
            }
        });

        confetti({
            particleCount: 20,
            angle: 120,
            spread: 60,
            origin: {
                x: 1
            }
        });

        if (Date.now() > end) {

            clearInterval(interval);

        }

    }, 250);

}


function launchMassiveConfetti() {

    const duration = 5000;
    const end = Date.now() + duration;

    const colors = [
        "#F6C6A8",
        "#EFA66B",
        "#D9824F",
        "#FFFFFF"
    ];

    const interval = setInterval(() => {

        confetti({
            particleCount: 80,
            spread: 120,
            startVelocity: 40,
            colors: colors,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });

        if (Date.now() > end) {

            clearInterval(interval);

        }

    }, 350);

}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


const animatedSections = document.querySelectorAll(
    ".memory-card, .flip-card, .timeline-item"
);


animatedSections.forEach((element, index) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =
        `opacity 0.7s ease ${index % 3 * 0.1}s,
         transform 0.7s ease ${index % 3 * 0.1}s`;

    observer.observe(element);

});