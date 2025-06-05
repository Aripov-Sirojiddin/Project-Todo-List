const folder = function(name) {
    const todos = [];
    const addTodo = function(todo) {
        todos.push(todo);
    }

    return {
        name,
        todos,
        addTodo
    }
}

const todo = function(title, description) {
    return {
        title,
        description
    }
}

const washDishes = todo("Wash the Dishes");
console.log(washDishes);

const fixTheKitchenSink = todo("Fix kitchen sink", "Wife will kill me if I don't fix it today!");

const houseChores = folder("House Chores");
houseChores.addTodo(washDishes);
houseChores.addTodo(fixTheKitchenSink);

console.log(houseChores.todos);

