function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

document.getElementById("cngbgBtn").addEventListener("click", function() {
    document.body.style.background = getRandomColor();
});

