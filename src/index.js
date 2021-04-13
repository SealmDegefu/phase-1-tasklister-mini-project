document.addEventListener("DOMContentLoaded", () => {
  const newDefault = document.getElementById('create-task-form')
  document.addEventListener('submit', (e) =>{
    e.preventDefault();
  })

document.querySelector("#new-click-btn").addEventListener ('click', () => {
// document.getElementById('new-click-btn').onclick  = function() {
  const newUl = document.getElementById('tasks')
  const node = document.createElement("li");
  const text = document.getElementById("new-task-description").value 
  const textnode=document.createTextNode(text);
  node.appendChild(textnode);
  newUl.appendChild(node)
//   node.value = text 
// node.append(newUl)

  })

//   node.appendChild(textnode);
//   document.getElementById("tasks").appendChild(node);
// }
document.getElementById("new-click-btn").addEventListener("click", () => {
   document.getElementById("new-task-description").value = ""
 
});

// function myFunction(){
//   const newLi = document.createElement('span');
//   const getId = document.createTextNode('&times;')
//   newLi.appendChild(getId)
//   document.getElementsByTagName('li').appendChild(proc);
// }
// myFunction();
// const grabLi= document.getElementsByTagName('li')
// grabLi.addEventListener('click', () => {
// grabLi.removeChild(list.childNodes[0])

// })

});
