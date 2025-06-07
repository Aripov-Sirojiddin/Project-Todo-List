import { default as newTodo } from "./todo";
import { todoDOMhandler } from "./todoDOMhandler";

export const folderDOMhandler = function (folder) {
    const parentContainer = document.querySelector("#folder-content");

    const renderFolderContent = function () {
        parentContainer.innerHTML = "";
        const createDialog = getCreateDialog();
        const createTodoBtn = document.createElement("button");
        createTodoBtn.textContent = "Create todo!";
        createTodoBtn.addEventListener("click", () => {
            createDialog.showModal();
        });

        parentContainer.appendChild(createDialog);
        parentContainer.appendChild(createTodoBtn);

        for (let todoID in folder.todos) {
            const todoObject = folder.todos[todoID];
            const renderedTodo = getTodoDOM(todoObject);
            parentContainer.appendChild(renderedTodo);
        }
    }

    const getTodoDOM = function (todo) {
        const todoDOM = todoDOMhandler(todo);
        const todoContainer = document.createElement("div");
        todoContainer.id = todo.id;

        const editDialog = getEditDialog(todo);
        const editBtn = document.createElement("button");
        editBtn.addEventListener("click", () => {
            editDialog.showModal();
        });
        editBtn.textContent = `Edit ${todo.title}`;

        const todoProperties = [
            todoDOM.titleElement,
            todoDOM.descriptionElement,
            getDeleteBtn(todo),
            editDialog,
            editBtn
        ];
        todoProperties.forEach(property => {
            todoContainer.appendChild(property);
        });

        return todoContainer;
    }

    const getCreateDialog = function () {
        const dialog = document.createElement("dialog");

        //Properties' forms
        const titleInput = document.createElement("input");
        titleInput.placeholder = "Title...";

        const descriptionInput = document.createElement("input");
        descriptionInput.placeholder = "Description...";

        const createBtn = document.createElement("button");
        createBtn.textContent = "Save";
        createBtn.addEventListener("click", () => {
            const myTodo = newTodo(
                titleInput.value,
                descriptionInput.value
            );
            titleInput.value = "";
            descriptionInput.value = "";
            folder.addTodo(myTodo);
            parentContainer.appendChild(getTodoDOM(myTodo));
            dialog.close();
        });

        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", () => {
            titleInput.value = "";
            descriptionInput.value = "";
            dialog.close();
        });

        const dialogChildren = [
            titleInput,
            descriptionInput,
            createBtn,
            cancelBtn,
        ];
        dialogChildren.forEach(child => {
            dialog.appendChild(child);
        });

        return dialog;
    }

    const getEditDialog = function (todo) {
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

            folder.editTodo(todo);
            document.getElementById(`title-${todo.id}`).textContent = todo.title;
            document.getElementById(`description-${todo.id}`).textContent = todo.description;
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

    const getDeleteBtn = function (todo) {
        const deleteBtn = document.createElement("button");
        deleteBtn.addEventListener("click", () => {
            folder.deleteTodo(todo);
            deleteBtn.parentElement.remove();
        });
        deleteBtn.textContent = `Delete ${todo.title}`;
        return deleteBtn;
    }

    return {
        renderFolderContent
    }
}