export const todo = function (title, description) {
    return {
        id: crypto.randomUUID(),
        title,
        description,
    }
}
export default todo;
