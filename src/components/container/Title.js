import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Content from './Content'
export default class Title extends Component {
    static contextTypes = {
        color: PropTypes.string
    }
    render(){
        return (
            <div style={{color:this.context.color}}>
                <p>titles</p>
                <Content />
            </div>
        )
    }
}