document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("click",(e)=>{
  const values = document.getElementById("new-task-description").value;
  const display = document.querySelector("#tasks")
  display.innerHTML = values;
  e.preventDefault();
  
})