export const addTodoList = (item) => {
    console.log(item,"item")
    return {
        type: 'ADDTODO',
        item
    }
}
export const updataList = (sum) => {
    return {
        type: 'UPDATALIST',
        sum
    }
}
export const deleteList = (newList,fineshed) => {
    return {
        type: 'DELETELIST',
        newList,
        fineshed
    }
}