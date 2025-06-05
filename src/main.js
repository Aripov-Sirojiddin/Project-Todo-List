const DOMhandler = function (parent) {
    const parentContainer = document.querySelector(parent);

    const renderFolderLink = function(folder) {

    }

    const renderFolder = function (folder) {
        parentContainer.appendChild(
            renderTodosInFolder(folder)
        );
    };
    const renderTodosInFolder = function (folder) {
        const folderContainer = document.createElement("div");
        folderContainer.id = folder.id;

        folder.todos.forEach(todo => {
            const renderedTodo = renderTodo(todo);
            folderContainer.appendChild(renderedTodo);
        });

        return folderContainer;
    };
    const renderTodo = function (todo) {
        const todoContainer = document.createElement("div");
        todoContainer.id = todo.id;

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

const folder = function (name) {
    const todos = [];
    const addTodo = function (todo) {
        todos.push(todo);
    };

    return {
        id: crypto.randomUUID(),
        name,
        todos,
        addTodo,
    };
};

const todo = function (title, description) {
    return {
        id: crypto.randomUUID(),
        title,
        description,
    };
};


(function () {
    const washDishes = todo("Wash the Dishes");
    console.log(washDishes);

    const fixTheKitchenSink = todo("Fix kitchen sink", "Wife will kill me if I don't fix it today!");

    const houseChores = folder("House Chores");
    houseChores.addTodo(washDishes);
    houseChores.addTodo(fixTheKitchenSink);

    const renderer = DOMhandler("body");
    renderer.renderFolder(houseChores);
    console.log(houseChores.todos);
})();
