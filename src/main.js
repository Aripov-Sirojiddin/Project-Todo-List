import { todo } from "./todo";
import { folder } from "./folder";
import { DOMhandler } from "./DOMhandler";

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
