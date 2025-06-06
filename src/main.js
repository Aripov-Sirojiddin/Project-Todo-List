import { todo } from "./todo";
import { folder } from "./folder";
import { DOMhandler } from "./DOMhandler";
import { folderManager } from "./folderManager";

(function () {
    const washDishes = todo("Wash the Dishes");
    const fixTheKitchenSink = todo("Fix kitchen sink", "Wife will kill me if I don't fix it today!");
    const play = todo("play", "Wife will kill me if I don't fix it today!");
    const doTaxes = todo("Cry emoji *sigh*", "Do taxes!");

    const myFolderManager = folderManager();
    const houseChoresFolder = folder("House Chores"); 
    myFolderManager.addFolder(houseChoresFolder);

    houseChoresFolder.addTodo(washDishes);
    houseChoresFolder.addTodo(fixTheKitchenSink);
    houseChoresFolder.addTodo(play);
    houseChoresFolder.addTodo(doTaxes);

    const renderer = DOMhandler();
    renderer.renderFolderContent(houseChoresFolder);
})();
