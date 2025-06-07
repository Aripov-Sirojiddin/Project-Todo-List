import { todoDOMhandler } from "./todoDOMhandler";

export const folderDOMhandler = function () {
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
            const todoDOM = todoDOMhandler(todo);
            const todoContainer = document.createElement("div");
            todoContainer.id = todo.id;

            const deleteBtn = document.createElement("button");
            deleteBtn.addEventListener("click", () => {
                folder.deleteTodo(todo.id);
                todoContainer.remove();
            });
            deleteBtn.textContent = `Delete ${todo.title}`;

            const dialog = todoDOM.renderEditDialog();
            const editBtn = document.createElement("button");
            editBtn.addEventListener("click", () => {
                dialog.showModal();
            });
            editBtn.textContent = `Edit ${todo.title}`;

            const todoProperties = [
                todoDOM.titleElement,
                todoDOM.descriptionElement,
                deleteBtn,
                dialog,
                editBtn
            ];
            todoProperties.forEach(property => {
                todoContainer.appendChild(property);
            });

            return todoContainer;
        }

        parentContainer.appendChild(renderTodosInFolder());
    }

    return {
        renderFolderContent
    }
}