// ================= Typing Animation =================

var typed = new Typed("#typing", {
    strings: [
        "Web Developer",
        "Python Programmer",
        "Frontend Developer",
        "MERN Stack Learner"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


// ================= Custom Cursor =================

const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();


// ================= Cursor Hover Effect =================

const hoverItems = document.querySelectorAll("a, .btn, .btn2, .card");

hoverItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.background = "#ffffff";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.background = "#00c3ff";

    });

});