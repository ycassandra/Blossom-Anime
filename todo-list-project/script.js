const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const task = inputBox.value.trim();
    
    // Check if the task input is empty
    if (!task) {
        alert("Please write down your task");
        return;
    }

    // Create the list item (li) with a checkbox and task content
    const li = document.createElement("li");
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;

    // Add the new task to the list
    listContainer.appendChild(li);

    // Reset the input field
    inputBox.value = "";

    // Update task counters
    updateCounters();

    // Attach events to the checkbox, edit button, and delete button
    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");

    // Event listener for task completion (checkbox)
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });

    // Event listener for editing the task
    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null && update.trim() !== "") {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
            updateCounters();
        }
    });

    // Event listener for deleting the task
    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCounters();
    });
}

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const totalTasks = document.querySelectorAll("li").length;
    const uncompletedTasks = totalTasks - completedTasks;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}
