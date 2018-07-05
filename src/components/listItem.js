import React,{Component} from 'react'
export default class ListItem extends Component {
    _handleClick = () => {
        this.props.updataStatus(this.props.item)
    }
    _deleteItem = () => {
        this.props.deleteitem(this.props.item)
    }
    render() {
        console.log(this.props)
        let {id,name,status} = this.props.item
        return (
            <li key={id}>
                <span className="check_btn"
                      onClick={this._handleClick}
                      style={ {background:status?'#A1EAFB':'#fff'} }></span>
                <span style={ {marginRight:'10px'} }>{name}</span>
                <span 
                    className="del_btn"
                    onClick={this._deleteItem}>删除</span>
            </li>
        )
    }
}