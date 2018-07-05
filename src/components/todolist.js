import React,{Component} from 'react'
import ListItem from './listItem'
import Dialog from './dialog'
import {addTodoList,updataList,deleteList} from '../store/actions'
import {store} from '../store'
export default class TodoList extends Component {
    _addItem = (newItem) => {
        newItem = {
            id: store.getState().list.length,
            name: newItem,
            status: 0
        }
        store.dispatch(addTodoList(newItem))
    }
    _updataStatus = (updataitem) => {
        let sum = store.getState().fineshed
        store.getState().list.map(item=>{
            if(updataitem.id === item.id) {
                item.status = updataitem.status? 0 : 1
                if(item.status === 1) {
                    sum++
                } else {
                    sum--
                }
            }
            
            store.dispatch(updataList(sum))
        })    
    }
    _deleteItem = (deleteItem) => {
        let newList = [],{list}=store.getState(),sum = 0
        store.getState().list.forEach(item=>{
            if(deleteItem.id !== item.id) {
                newList.push(item)
            }
        })
        store.dispatch(deleteList(newList))
        store.getState().list.forEach(item=>{
            if(item.status === 1) {
                sum++
            }
        })
        console.log(store.getState(),'3333333333333333333333333333333333333333')
        store.dispatch(updataList(sum))
        
    }
    render() {
        console.log(store.getState(),"getstate")
        return (
            <div>
                <h6>TODOLIST_REDUX</h6>
                <ul>
                    {store.getState().list.map(item => {
                        return <ListItem 
                                    item={item} 
                                    key={item.id}
                                    updataStatus={this._updataStatus}
                                    deleteitem={this._deleteItem} />
                    })}
                    <li>{store.getState().fineshed}已完成/{store.getState().list.length}条任务</li>
                </ul>
                <Dialog addItem={this._addItem}/>
            </div>
        )
    }
}