import React,{Component} from 'react'
export default class ListItem extends Component {
    _handlefinished = () => {
        console.log(this.props,"this.props")
        let {status,id,name} = this.props.listData
        status = status === 0 ? 1:0
        this.props.finishedChange({
            id: id,
            name: name,
            status: status
        })
    }
    _handleClick = () => {
        this.props.totalChange(this.props.listData)
    }
    render() {
        let {id,name,status} = this.props.listData
        return (
            <li key={id}>
                <span 
                    className="check-btn"
                    onClick={this._handlefinished}
                    style={{background:status?"#A1EAFB":"#fff"}}
                    ></span>
                <span>{name}</span>
                <span
                    onClick={this._handleClick}
                    className="delete-btn"
                    >删除</span>
            </li>
        )
    }
}