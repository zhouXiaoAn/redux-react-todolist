import React,{Component} from 'react'
export default class Dialog extends Component {
    _handleClick = () => {
        let val = this.refs.text.value
        if(val) {
            this.props.addItem(val)
            this.refs.text.value = ''
        }
        
    }
    render() {
        let {addItem} = this.props
        return (
            <div>
                <span 
                    className="add_btn"
                    onClick={this._handleClick}>添加</span>
                <input type="text" ref="text" placeholder="您想要做点儿什么呢" />
            </div>
        )
    }
}