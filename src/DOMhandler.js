import { todoDOMhandler } from "./todoDOMhandler";

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
        
        const todoDOM = todoDOMhandler();

        const renderTodo = function (todo) {
            const todoContainer = document.createElement("div");
            todoContainer.id = todo.id;

            const description = document.createElement("p");
            description.textContent = todo.description;

            const deleteBtn = document.createElement("button");
            deleteBtn.addEventListener("click", () => {
                folder.deleteTodo(todo.id);
                todoContainer.remove();
            });
            deleteBtn.textContent = `Delete ${todo.title}`;

            const editDiv = renderEditTodoDialog(todo);

            const todoProperties = [todoDOM.getTitle(todo).element, description, deleteBtn, editDiv];
            todoProperties.forEach(property => {
                todoContainer.appendChild(property);
            });

            return todoContainer;
        }

        const renderEditTodoDialog = function (todo) {
            const editTodoContainer = document.createElement("div");
            const dialog = document.createElement("dialog");
            dialog.id = todo.id;
    
            const closeBtn = document.createElement("button");
            closeBtn.textContent = "x";
            closeBtn.addEventListener("click", () => {
                dialog.close();
            });
    
            const dialogChildren = [closeBtn, todoDOM.getTitle(todo).form];
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
        parentContainer.appendChild(renderTodosInFolder());
    }

    return {
        renderFolderContent
    }
}