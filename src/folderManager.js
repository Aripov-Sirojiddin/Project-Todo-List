import { folder } from "./folder";

export const folderManager = function () {
    const folders = {}
    
    const createFolder = function(folderName) {
        const folderID = crypto.randomUUID();
        folders[folderID] = folder(folderName);
        return folders[folderID];
    }

    return {
        createFolder,
    }
}