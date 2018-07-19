import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class Content extends Component {
    static contextTypes = {
        name: PropTypes.string
    }
    render() {
        return (
            <div>{this.context.name}</div>
        )
    }
}