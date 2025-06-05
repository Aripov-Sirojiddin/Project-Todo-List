export const folderManager = function () {
    const folders = {}
    
    const addFolder = function(folder) {
        folders[folder.id] = folder;
    }

    return {
        addFolder,
    }
}