import { folder } from "./folder";

export class FoldersSave {
    static folders = {};
    static #saveName = "folders";

    static save() {
        localStorage.setItem(this.#saveName, JSON.stringify(this.folders));
    }
    static load() {
        const savedData = JSON.parse(localStorage.getItem(this.#saveName));
        if (savedData !== undefined) {
            for (let id in savedData) {
                const loadedFolder = folder(savedData[id].name);
                loadedFolder.id = id;
                loadedFolder.todos = savedData[id].todos;
                this.folders[id] = loadedFolder;
            }
        }
    }

    static addFolder(folder) {
        this.folders[folder.id] = folder;
        this.save();
    }
}