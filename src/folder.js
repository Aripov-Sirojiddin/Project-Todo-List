export const folder = function (name) {
    const todos = {};
    const addTodo = function (todo) {
        todos[crypto.randomUUID()] = todo;
    };

    return {
        id: crypto.randomUUID(),
        name,
        todos,
        addTodo,
    };
};
