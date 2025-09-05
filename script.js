const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const one = document.querySelector(".onee");
const cnt = document.querySelector(".cnt");

function addTask() {
    if(inp.value.trim() != ''){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class","one");
        newDiv.innerHTML = one.innerHTML;
        newDiv.children[0].innerText = inp.value.trim() ;
        cnt.appendChild(newDiv);
        inp.value = '';


    }
}

inp.addEventListener("keydown", keyDwn);

function keyDwn(e){
  if(e.key == 'Enter') addTask()
}
function delTask(ele){
ele.parentElement.remove();
}

function readTask(ele) {
    
    ele.parentElement.style.backgroundColor = "transparent";
    ele.parentElement.children[0].style.color = "green";
    ele.parentElement.children[0].style.textDecoration = "line-through";
    ele.remove()
}
