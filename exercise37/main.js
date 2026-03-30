
function addTodo() {
  const input = document.getElementById("todoInput");
  const imageInput = document.getElementById("imageInput");
  const content = document.getElementById("content");
  const text = input.value.trim();
  if (text === "")
   return; 

   
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");

  const todoText = document.createElement("span");
  todoText.textContent = text;

  const todoContent = document.createElement("p");
  todoContent.textContent = content.value;

  
  const img = document.createElement("img");
  img.src = imageInput.value || prompt("Enter image URL:"); 


  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function() {
    const newText = prompt("Edit your todo:", todoText.textContent);
    if (newText) todoText.textContent = newText;
  });


  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function() {
    todoDiv.remove();
  });


  todoDiv.appendChild(todoText);
  todoDiv.appendChild(img);
   todoDiv.appendChild(todoContent);
  todoDiv.appendChild(editBtn);
  todoDiv.appendChild(deleteBtn);

  // Ku dar DOM-ka
  document.getElementById("todoContainer").appendChild(todoDiv);

  
  input.value = "";
  imageInput.value = "";
  content.value = "";
}


document.getElementById("addBtn").addEventListener("click", addTodo);

document.getElementById("todoInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTodo();
});
