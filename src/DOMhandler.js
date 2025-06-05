export const DOMhandler = function (parent) {
    const parentContainer = document.querySelector(parent);

    const renderFolderLink = function (folder) {

    }

    const renderFolder = function (folder) {
        parentContainer.appendChild(
            renderTodosInFolder(folder)
        );
    };
    const renderTodosInFolder = function (folder) {
        const folderContainer = document.createElement("div");
        folderContainer.id = folder.id;

        for(let id in folder.todos) {
            const todoObject = folder.todos[id];
            const renderedTodo = renderTodo(id, todoObject);
            folderContainer.appendChild(renderedTodo);
        };

        return folderContainer;
    };
    const renderTodo = function (id, todo) {
        const todoContainer = document.createElement("div");
        todoContainer.id = id;

        const title = document.createElement("h1");
        title.textContent = todo.title;

        const description = document.createElement("p");
        description.textContent = todo.description;

        const todoProperties = [title, description];
        todoProperties.forEach(property => {
            todoContainer.appendChild(property);
        });

        return todoContainer;
    };
    return {
        renderFolder
    };
}