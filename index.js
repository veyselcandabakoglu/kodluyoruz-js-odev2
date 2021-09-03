let counter = 1;

let itemDOM = document.querySelector("#liveToastBtn");
itemDOM.addEventListener("submit", newElement);
let alertDOM = document.querySelector("#alert");

let userListDOM = document.querySelector("#list");


function remove(c) {
    var el = document.getElementById('button-' + c);
    el.remove();
}


let alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}!</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  </button>
</div>
`;

function newElement() {

    const taskDOM = document.querySelector("#task");

    if (taskDOM.value) {
        addItem(taskDOM.value);
        taskDOM.value = "";
        document.getElementById("task").focus();
        alertDOM.innerHTML = alertFunction("Başlık Bilgisi", "Listeye Eklendi.!!", "success");
    }
    else {
        alertDOM.innerHTML = alertFunction("Başlık Bilgisi", "Eksik Bilgi Girdiniz!!", "danger");
    }

    counter++;
}



const addItem = (task) => {
    let buttonDOM = document.createElement("button");
    buttonDOM.innerHTML = `${task} <span class="close1" onclick="remove(${counter})">x</span> `;
    buttonDOM.classList.add("list-group-item", "list-group-item-action");
    buttonDOM.setAttribute('id', 'button-' + counter)
    userListDOM.append(buttonDOM);
    localStorage.setItem("Görev button-" + counter, JSON.stringify(task));

}






