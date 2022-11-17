const form = document.getElementById("form")
const item = document.querySelector("#item")
const list = document.querySelector(".list")
const listBody = document.querySelector(".list-body")
const deleteAll = document.querySelector(".delete-all")

eventListener();

function eventListener(){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        addItem();
    })
    listBody.addEventListener("click", deleteItem)
    deleteAll.addEventListener("click", deleteAllItem)
}