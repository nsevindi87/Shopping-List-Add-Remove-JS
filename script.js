const form = document.getElementById("form");
const item = document.querySelector("#item");
const list = document.querySelector(".list");
const listBody = document.querySelector(".list-body");
const deleteAll = document.querySelector(".delete-all");

eventListener();

function eventListener(){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        addItem();
    })
    listBody.addEventListener("click", deleteItem);
    deleteAll.addEventListener("click", deleteAllItem)
}

function addItem(){
    newItem = item.value.trim();
    if(newItem !== ""){
        addItemToList(newItem)
    }
}

function addItemToList(newItem){
    const listItem = document.createElement("li")
    const link = document.createComment("a")
    const text = document.createComment("span")
    link.href = "#";
    link.className = "delete-item"
    link.innerHTML ='<i class="fas fa-trash"></i>'
    const newItemCreate = document.createTextNode(newItem);
    text.appendChild(newItemCreate)
    link.appendChild(text)
    listItem.appendChild(link)
    list.appendChild(listItem)
    item.value=""
}

function deleteItem(e){
    if(e.target.className === "fas fa-trash"){
        e.target.parentElement.parentElement.remove()
    }
}

function deleteAllItem(){
    listBody.innerHTML = ""
}

/* APPENDCHILD HATA VERIYOR */