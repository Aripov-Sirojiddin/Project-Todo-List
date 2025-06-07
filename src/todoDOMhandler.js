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

    const renderEditDialog = function () {
        const dialog = document.createElement("dialog");

        //Properties' forms
        const titleInput = document.createElement("input");
        titleInput.value = todo.title;

        const descriptionInput = document.createElement("input");
        descriptionInput.value = todo.description === undefined ? "" : todo.description;

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.addEventListener("click", () => {
            todo.title = titleInput.value;
            todo.description = descriptionInput.value;
            
            titleElement.textContent = todo.title;
            descriptionElement.textContent = todo.description;

            dialog.close();
        });

        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", () => {
            dialog.close();
        });

        const dialogChildren = [
            titleInput,
            descriptionInput,
            saveBtn,
            cancelBtn,
        ];
        dialogChildren.forEach(child => {
            dialog.appendChild(child);
        });

        return dialog;
    }
    return {
        renderEditDialog,
        titleElement,
        descriptionElement,
    }
}