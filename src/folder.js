import { FoldersSave } from "./FoldersSave";

export const folder = function (name) {
    const todos = {}

    const addTodo = function (todo) {
        todos[todo.id] = todo;
        FoldersSave.save();
    }
    const editTodo = function (todo) {
        todos[todo.id] = todo;
        FoldersSave.save();
    }
    const deleteTodo = function (todo) {
        delete todos[todo.id];
        FoldersSave.save();
    }
    return {
        id: crypto.randomUUID(),
        name,
        todos,
        addTodo,
        editTodo,
        deleteTodo,
    }
}
