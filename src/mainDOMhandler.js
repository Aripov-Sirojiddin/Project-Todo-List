import { folder } from "./folder";
import { folderDOMhandler } from "./folderDOMhandler";
import { FoldersSave } from "./FoldersSave";

export const mainDOMhandler = function () {
    const parentContainer = document.getElementById("folders-list");

    const folders = FoldersSave.folders;

    const getFolderLink = function (folder) {
        const folderLinkContainer = document.createElement("div");
        folderLinkContainer.id = `link-${folder.id}`;

        const heading = document.createElement("h1");
        heading.textContent = folder.name;
        folderLinkContainer.appendChild(heading);

        folderLinkContainer.addEventListener("click", () => {
            folderDOMhandler(folder).renderFolderContent();
        });
        return folderLinkContainer;
    }

    const getCreateFolderDialog = function () {
        const dialog = document.createElement("dialog");

        //Properties' forms
        const nameInput = document.createElement("input");
        nameInput.placeholder = "Name of the folder...";

        const createBtn = document.createElement("button");
        createBtn.textContent = "Save";
        createBtn.addEventListener("click", () => {
            const myNewFolder = folder(nameInput.value);
            nameInput.value = "";
            FoldersSave.addFolder(myNewFolder);
            folderDOMhandler(FoldersSave.folders[myNewFolder.id]).renderFolderContent();
            parentContainer.appendChild(getFolderLink(myNewFolder));
            dialog.close();
        });

        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", () => {
            dialog.close();
        });

        const dialogChildren = [
            nameInput,
            createBtn,
            cancelBtn,
        ];
        dialogChildren.forEach(child => {
            dialog.appendChild(child);
        });

        return dialog;
    }

    const renderMain = () => {
        const createDialog = getCreateFolderDialog();
        const createFolderBtn = document.createElement("button");
        createFolderBtn.textContent = "Create folder!";
        createFolderBtn.addEventListener("click", () => {
            createDialog.showModal();
        });

        parentContainer.appendChild(createDialog);
        parentContainer.appendChild(createFolderBtn);
        
        FoldersSave.load();
        for(let id in FoldersSave.folders) {
            parentContainer.appendChild(getFolderLink(FoldersSave.folders[id]));
        }
    }

    return {
        renderMain,
    }
}