export const todoDOMhandler = function () {
    const getTitle = function (todo) {
        const titleElement = document.createElement("h1");
        titleElement.id = `title-${todo.id}`;
        titleElement.textContent = todo.title;

        const titleEditForm = document.createElement("input");
        titleEditForm.value = todo.title;
        titleEditForm.addEventListener("input", () => {
            todo.title = titleEditForm.value;
            document.getElementById(`title-${todo.id}`).textContent = titleEditForm.value;
        });

        return {
            element: titleElement,
            form: titleEditForm,
        };
    }

    return {
        getTitle,
    }
}