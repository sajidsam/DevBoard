document.addEventListener("DOMContentLoaded", function () {
    function getCurrentDate() {
        const options = { weekday: 'short', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('en-US', options);
    }

    const dateElement = document.getElementById("current-date");
    if (dateElement) {
        dateElement.textContent = getCurrentDate();
    }

    const buttons = document.querySelectorAll(".completed");
    const task = document.getElementById("cntTask");
    const taskMessages = document.querySelector(".space-y-4");
    const addTaskCount = document.getElementById("addTask");

    if (task) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                this.disabled = true;
                this.classList.add("bg-gray-400", "cursor-not-allowed");

                let currentCount = parseInt(task.textContent);
                if (!isNaN(currentCount) && currentCount > 0) {
                    task.textContent = currentCount - 1;
                }

                const taskName = buttons[i].closest('.task').querySelector('.task-title').textContent;
                const currentTime = new Date().toLocaleTimeString();
                const message = `You have completed the task: ${taskName} at ${currentTime}`;
                const messageElement = document.createElement("p");
                messageElement.textContent = message;
                taskMessages.appendChild(messageElement);

                alert("Board updated successfully!");

                const remainingTasks = document.querySelectorAll(".completed:not(:disabled)").length;
                if (remainingTasks === 0) {
                    setTimeout(() => {
                        alert("Congratulations! You have completed all the current tasks");
                    }, 500);
                }

                // Increment the value in the addTask element by 1
                let currentTaskCount = parseInt(addTaskCount.textContent);
                if (!isNaN(currentTaskCount)) {
                    addTaskCount.textContent = currentTaskCount + 1;
                }
            });
        }
    }

    function getRandomColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    document.getElementById("cngbgBtn")?.addEventListener("click", function () {
        document.body.style.background = getRandomColor();
    });

    const clearHistoryButton = document.getElementById("clearHistoryBtn");
    if (clearHistoryButton) {
        clearHistoryButton.addEventListener("click", function () {
            taskMessages.innerHTML = '';
        });
    }

    document.getElementById("discover")?.addEventListener("click", function () {
        window.location.href = "idex.html";
    });

    document.getElementById("backtodesk")?.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
