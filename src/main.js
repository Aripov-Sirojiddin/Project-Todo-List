import { todo } from "./todo";
import { folder } from "./folder";
import { DOMhandler } from "./DOMhandler";
import { folderManager } from "./folderManager";

(function () {
    const washDishes = todo("Wash the Dishes");
    const fixTheKitchenSink = todo("Fix kitchen sink", "Wife will kill me if I don't fix it today!");

    const myFolderManager = folderManager();
    const houseChoresFolder = myFolderManager.createFolder("House Chores");

    houseChoresFolder.addTodo(washDishes);
    console.log(houseChoresFolder);
    houseChoresFolder.addTodo(fixTheKitchenSink);

    const renderer = DOMhandler();
    renderer.renderFolder(houseChoresFolder);
})();
