let data = [];

function addData() {
    let id = document.getElementById("studentId").value;
    let pass = document.getElementById("password").value;

    if (id === "" || pass === "") {
        alert("Enter all fields");
        return;
    }

    data.push({ id: id, pass: pass });
    alert("Added successfully");

    document.getElementById("studentId").value = "";
    document.getElementById("password").value = "";
}

function showData() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item.id + " - " + item.pass;
        list.appendChild(li);
    });
}

function searchData() {
    let search = document.getElementById("search").value;
    let list = document.getElementById("list");
    list.innerHTML = "";

    let found = data.find(item => item.id === search);

    if (found) {
        let li = document.createElement("li");
        li.textContent = found.id + " - " + found.pass;
        list.appendChild(li);
    } else {
        list.innerHTML = "<li>Not found</li>";
    }
}