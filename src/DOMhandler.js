export const DOMhandler = function () {
    const parentContainer = document.querySelector("#folder-content");

    const renderFolderContent = function (folder) {
        const renderTodosInFolder = function () {
            const folderContainer = document.createElement("div");
            folderContainer.id = folder.id;

            for (let todoID in folder.todos) {
                const todoObject = folder.todos[todoID];
                console.log(todoObject);
                const renderedTodo = renderTodo(todoObject);
                folderContainer.appendChild(renderedTodo);
            }

            return folderContainer;
        }

        const renderTodo = function (todo) {
            const todoContainer = document.createElement("div");
            todoContainer.id = todo.id;

            const title = document.createElement("h1");
            title.textContent = todo.title;

            const description = document.createElement("p");
            description.textContent = todo.description;

            const deleteBtn = document.createElement("button");
            deleteBtn.addEventListener("click", () => {
                folder.deleteTodo(todo.id);
                todoContainer.remove();
            });
            deleteBtn.textContent = `Delete ${todo.title}`;

            const editDiv = renderEditTodoDialog(todo, {title, description});

            const todoProperties = [title, description, deleteBtn, editDiv];
            todoProperties.forEach(property => {
                todoContainer.appendChild(property);
            });

            return todoContainer;
        }

        parentContainer.appendChild(renderTodosInFolder());
    }

    const renderEditTodoDialog = function (todo, todoElements) {
        const editTodoContainer = document.createElement("div");
        const dialog = document.createElement("dialog");
        dialog.id = todo.id;

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "x";
        closeBtn.addEventListener("click", () => {
            dialog.close();
        });

        const titleTextField = document.createElement("input");
        titleTextField.value = todo.title

        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update todo?";
        updateBtn.addEventListener("click", ()=>{
            todo.title = titleTextField.value;
            todoElements.title.textContent = todo.title;
            dialog.close();
        });
        
        const dialogChildren = [closeBtn, titleTextField, updateBtn];
        dialogChildren.forEach(child => {
            dialog.appendChild(child);
        });

        const openBtn = document.createElement("button");
        openBtn.textContent = `Edit ${todo.title}?`;
        openBtn.addEventListener("click", () => {
            dialog.showModal();
        });

        editTodoContainer.appendChild(dialog);
        editTodoContainer.appendChild(openBtn);

        return editTodoContainer;
    }
    return {
        renderFolderContent
    }
}