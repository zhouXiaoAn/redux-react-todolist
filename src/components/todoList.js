import React,{Component} from 'react'
import ListItem from './ListItem'
import Dirlog from './dirlog'
export default class TodoList extends Component {
    state = {
        list: [{
            id: 0,
            name: '吃饭',
            status: 0
        }, {
            id: 1,
            name: '睡觉',
            status: 0
        }, {
            id: 2,
            name: '打豆豆',
            status : 0
        }],
        finished:0
    }
    _addNewTask = (newItem) => {
        let allTask = this.state.list
        allTask.push(newItem)
        this.setState({list:allTask})
    }
    _finishedChange = (todoItem) => {
        let sum = 0
        this.state.list.forEach(item=>{
            if(item.id === todoItem.id) {
                item.status = todoItem.status
            }
            if(item.status === 1) {
                sum++
            }
        })
        this.setState({finished:sum})
    }
    _totalUpdata = (totalItem) => {
        console.log(totalItem,"totalItem")
        let list = [],sum = 0
        this.state.list.forEach(item => {
            console.log(item,totalItem,"forEach")
            if(item.id !== totalItem.id) {
                list.push(item)
                if(item.status === 1) {
                    sum++
                }
            }
        })
        this.setState({
            list:list,
            finished:sum
        })
    }
    render() {
        return (
            <div className="container">
                <h6>TodoList</h6>
                <ul>
                    {this.state.list.map((item,index) =>  
                        <ListItem 
                            listData={item} 
                            finishedChange={this._finishedChange}
                            totalChange={this._totalUpdata}
                            key={index} />)}
                            <li>{this.state.finished}已完成&nbsp;/&nbsp;{this.state.list.length}总数</li>
                </ul>
                <Dirlog addNewTask={this._addNewTask} nums={this.state.list.length}/>    
            </div>
        )
    }
}