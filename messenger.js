let inp = document.getElementById("inp");
let div = documnet.getElementById("msg");
function send(){
    let task = inp.value;
    let taskli = document.createElement("div");
    taskli.innerHTML = task;
    div.appendChild(taskli);
    inp.value="";
}