document.addEventListener("DOMContentLoaded", function () {
    // Function to display the current date
    function getCurrentDate() {
        const options = { weekday: 'short', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('en-US', options);
    }

    // Set the date inside the <h1> element with ID "current-date"
    const dateElement = document.getElementById("current-date");
    if (dateElement) {
        dateElement.textContent = getCurrentDate();
    }

    // Task count functionality
    const buttons = document.querySelectorAll(".completed");
    const task = document.getElementById("cntTask"); // Ensure cntTask exists in HTML

    if (task) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                this.disabled = true;
                this.classList.add("bg-gray-400", "cursor-not-allowed");

                let currentCount = parseInt(task.textContent);
                if (!isNaN(currentCount) && currentCount > 0) {
                    task.textContent = currentCount - 1;
                }
            });
        }
    }

    // Change background color on button click
    function getRandomColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    document.getElementById("cngbgBtn")?.addEventListener("click", function () {
        document.body.style.background = getRandomColor();
    });

    // Div leads to another page
    document.getElementById("discover")?.addEventListener("click", function () {
        window.location.href = "idex.html";
    });

    // Back to desk button
    document.getElementById("backtodesk")?.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
