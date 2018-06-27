import React,{Component} from 'react'
import {addToCart,updatedCart} from '../store/actions'
import store from '../store'
class Test extends Component {
    renderList = () => {
        return store.getState().cart.map((item,index)=>{
            return (
                <li key={index}>
                    <p>{item.product}</p>
                    <span>{item.quantity}&nbsp</span>
                    <span>{item.unitCost}</span>
                </li>
            )
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.renderList()
                    }
                </ul>
            </div>
        )
    }
}
export default Test