import React, { Component } from 'react'

export default class Die extends Component {

    static defaultProps = {
        val: 0
    }

    render() {
        let num = ['one', 'two', 'three', 'four', 'five', 'six']
        return (
            <div className={`die ${this.props.isRolling ? 'isRolling' : ''}`} onClick={this.props.handleClick}>
                <i className={`fas fa-dice-${num[this.props.val]} ${this.props.locked ? 'locked' : ''}`}></i>
            </div>
        )
    }
}
