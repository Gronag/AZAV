const input = document.querySelector("#new-input");
const form = document.querySelector("#new-task-form");
const list_el = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    // console.log(task);
    const danger = `
    <div class="content">
        <input type="text" value="${task}">
        <div class="action">
        <input type="button" class="edit" value="Edit">
        <input type="button" class="delete" value="Del">
        </div>
    </div>`
    // console.log(danger);
    list_el.innerHTML = danger;
})