import React,{Component} from 'react'
import Title from './Title'
import PropTypes from 'prop-types'
import './header.css'
export default class Header extends Component {
    state = {
        title: '6566666'
    }
    static contextTypes = {
        color: PropTypes.string
    }
    static childContextTypes = {
        title: PropTypes.string
    }
    getChildContext(){
        console.log(this.state.title,"state.title")
        return {
            title: this.state.title
        }
    }
    render() {
        console.log(this,"header")
        return (
            <div className="header">
                <p>头部</p>
                <Title />
            </div>
        )
    }
}