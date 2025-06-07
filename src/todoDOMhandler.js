export const todoDOMhandler = function (todo) {
    const titleElement = document.createElement("h1");
    (()=> {
        titleElement.id = `title-${todo.id}`;
        titleElement.textContent = todo.title;
    })();

    const descriptionElement = document.createElement("p");
    (()=> {
        descriptionElement.id = `description-${todo.id}`;
        descriptionElement.textContent = todo.description;
    })();

    return {
        titleElement,
        descriptionElement,
    }
}