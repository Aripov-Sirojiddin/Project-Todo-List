export const folder = function (name) {
    const todos = {};
    const addTodo = function (todo) {
        todos[crypto.randomUUID()] = todo;
    };
    const deleteTodo = function (id) {
        delete todos[id];
    }
    return {
        id: crypto.randomUUID(),
        name,
        todos,
        addTodo,
        deleteTodo,
    };
};
