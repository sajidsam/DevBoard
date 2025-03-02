document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".completed");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            this.disabled = true;
            this.classList.add("bg-gray-400", "cursor-not-allowed");
        });
    }
});


// Change background color on button click
function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

document.getElementById("cngbgBtn")?.addEventListener("click", function () {
    document.body.style.background = getRandomColor();
});

// Div leads to another page
document.getElementById("discover")?.addEventListener("click", function () {
    window.location.href = "index.html";
});

// Back to desk button
document.getElementById("backtodesk")?.addEventListener("click", function () {
    window.location.href = "index.html";
});