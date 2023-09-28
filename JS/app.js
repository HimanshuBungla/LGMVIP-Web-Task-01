let inputtask = document.querySelector('#inputtask');
let list = document.querySelector('#list');

inputtask.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        const taskText = this.value.trim();
        if (taskText !== "") {
            addItem(taskText);
            this.value = "";
        }
    }
})
let addItem = (inputtask) =>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputtask}<i></i>`;
    listItem.addEventListener("click",function(){
        this.classList.toggle('done');
    })
    listItem.querySelector("i").addEventListener(
        "click",function(){
            listItem.remove();
        }
        )
        list.appendChild(listItem);
}