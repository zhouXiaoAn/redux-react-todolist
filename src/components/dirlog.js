import React,{Component} from 'react'
export default class Dirlog extends Component {
    constructor(props) {
        super(props)
    }
    _handleClick = () => {
        let len = this.props.nums
        let newId = len > 0 ? len : 0
        let value = this.refs.text.value
        let newItem = {
            id: newId,
            name: value,
            status: 0
        }
        this.props.addNewTask(newItem)
        this.refs.text.value = ""
    }
    render() {
        return (
            <div>
                <input type="text" ref="text" placeholder="你想做点儿什么嘞" />
                <input type="button" onClick={this._handleClick} value="添加"/>
            </div>
        )
    }
}