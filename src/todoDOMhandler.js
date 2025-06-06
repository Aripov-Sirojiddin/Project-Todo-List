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

    const getDescription = function (todo) {
        const descriptionElement = document.createElement("p");
        descriptionElement.id = `description-${todo.id}`;
        descriptionElement.textContent = todo.description;

        const descriptionEditForm = document.createElement("input");
        descriptionEditForm.value = todo.description === undefined ? "" : todo.description;
        descriptionEditForm.addEventListener("input", () => {
            todo.description = descriptionEditForm.value;
            document.getElementById(`description-${todo.id}`).textContent = descriptionEditForm.value;
        });

        return {
            element: descriptionElement,
            form: descriptionEditForm,
        };
    }


    return {
        getTitle,
        getDescription,
    }
}