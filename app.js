let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');

function addTask() {
    let inputValue = inputBox.value.trim(); // Trim whitespace from the input value
    if (inputValue === '') {
        alert('Please Enter the Text');
    } else {
        const task = document.createElement('li');
        task.textContent = inputValue;
        listContainer.appendChild(task);
        let span = document.createElement('span');
        span.textContent = "\u00d7";
        task.appendChild(span);
        span.style.right = '0px';
    }
    inputBox.value = '';
    saveData();
}

inputBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
