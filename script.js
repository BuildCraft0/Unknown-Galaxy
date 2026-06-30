 const todoInput = document.querySelector("#todo-input");
        const addBtn = document.querySelector("#add-btn");
        const todoList = document.querySelector("#todo-list");


        addBtn.addEventListener("click", () => {
            const taskText = todoInput.value;
            if (taskText === "") {
                document.querySelector("#danger").textContent = "⚠️Enter the task first!";
                setTimeout(() => {
                    document.querySelector("#danger").textContent = "";
                }, 1000);
                return;
            }

            
            const li = document.createElement("li");
            li.innerText = taskText; 

            
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn"); 
            deleteBtn.addEventListener("click", () => {
                li.remove(); 
            });

            
            li.appendChild(deleteBtn);
            todoList.appendChild(li);


            todoInput.value = "";
        });