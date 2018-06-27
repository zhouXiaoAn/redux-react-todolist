import React,{Component} from 'react'
import {addToCart,updatedCart} from '../store/actions'
import {tips} from './Tips'
import store from '../store'
export default class Update extends Component {
    state = {
        product:'',
        num:'',
        price:''
    }
    _addToCart = () => {
        let {product,num,price} = this.state
        if(!product) {
            console.log("输入为空")
            tips('商品名不能为空')
            document.body.addEventListener('click',this.hiddenTips)
            return
        }
        let isExistence = store.getState().cart.filter((item,index)=>{
            console.log(item,"item")
            return item.product == product
        })
        console.log(isExistence)
        if(isExistence.length != 0) {
            alert('该商品已存在')
            tips('该商品已存在')
            document.body.addEventListener('click',this.hiddenTips)
            return
        }
        store.dispatch(addToCart(product,num,price))
    }
    hiddenTips = () => {
        if(document.getElementsByClassName('tips').length > 0) {
            document.body.removeChild(document.getElementsByClassName('tips')[0])
        }
        
    }
    _updateToCart = () => {
        store.dispatch(updatedCart('虾条','20','652'))
    }
    render() {
        let {product,num,price} = this.state
        return (
            <div>
                商品名<input type="text" placeholder="请输入商品名" value={product} onChange={(e)=>this.setState({product:e.target.value})}/><br />
                数量：<input type="number" placeholder="请输入商品数量" value={num}/><br />
                单价：<input type="number" placeholder="商品单价" value={price}/><br />
                <button onClick={this._addToCart}>添加商品</button>
                <button onClick={this._updateToCart}>更新商品</button>
            </div>
        )
    }
}