export const DOMhandler = function () {
    const parentContainer = document.querySelector("#folder-content");

    const renderFolderContent = function (folder) {
        const renderTodosInFolder = function () {
            const folderContainer = document.createElement("div");
            folderContainer.id = folder.id;

            for (let todoID in folder.todos) {
                const todoObject = folder.todos[todoID];
                console.log(todoObject);
                const renderedTodo = renderTodo(todoID, todoObject);
                folderContainer.appendChild(renderedTodo);
            }

            return folderContainer;
        }


        const renderTodo = function (todoID, todo) {
            const todoContainer = document.createElement("div");
            todoContainer.id = todoID;

            const title = document.createElement("h1");
            title.textContent = todo.title;

            const description = document.createElement("p");
            description.textContent = todo.description;

            const deleteBtn = document.createElement("button");
            deleteBtn.addEventListener("click", () => {
                folder.deleteTodo(todoID);
                todoContainer.remove();
            });
            deleteBtn.textContent = `Delete ${todo.title}`;

            const todoProperties = [title, description, deleteBtn];
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