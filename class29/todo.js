let inp=document.querySelector("#inp");
let addbtn=document.querySelector("#add")
let list=document.querySelector("#list")

addbtn.addEventListener("click",function(){
    let task=inp.value;
    if(task==""){
        alert("enter your task....")
        return
    }
    let li = document.createElement("li")
    li.textContent=task;

    let deletebtn = document.createElement("button");
    deletebtn.textContent="delete"
    deletebtn.classList="deletebtn"

    deletebtn.addEventListener("click",function(){
        li.remove();
    })
    li.appendChild(deletebtn)

    list.appendChild(li)

    inp.value=""
})