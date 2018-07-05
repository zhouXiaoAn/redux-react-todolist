const initState = {
    list: [
        {
            id:0,
            name:'吃饭',
            status:0
        },
        {
            id:1,
            name:'吃饭',
            status:0
        },
        {
            id:2,
            name:'吃饭',
            status:0
        }
    ],
    fineshed: 0
}
export const addTodoList = (state=initState,action) => {
    console.log(state,"reducer")
    console.log(action,'action')
    switch(action.type) {
        case 'ADDTODO':
        state.list.push(action.item)
        return state
        case 'UPDATALIST':
        state.fineshed = action.sum
        return state
        case 'DELETELIST':
        state.list = action.newList
        return state
        default:
        return state
    }
}
