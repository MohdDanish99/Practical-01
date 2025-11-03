console.log("my first java screept");
const price1=5;
const price2=6;
let total=price1+price2;
console.log(total);
let x=5;
let y=6;
const total1=x+y;
console.log(total1);
function sub(a,b){
    return a-b;
}
console.log(sub(3,2));

// for the html file
const taskinput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
function addTask(){
    const taskText=taskinput.ariaValueMax.trim();

    if(taskText==="")
    {
        alert("Plese enter a task!");
        return;
    }
   
    // Creat li element
    const li=document.createElement("li");

    //  task text
    const span=document.createElement("span");
    span.textContent =taskText;

    // tick button
    const tickBtn=document.createElement("button");
    tickBtn.textContent="✔️"
}
