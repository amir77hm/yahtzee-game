import React, { Component } from 'react'
import Die from "./Die";

export default class Dice extends Component {

    render() {
        return (
            <div className='Dice'>
                {this.props.dice.map((die, idx) =>
                    <Die
                        handleClick={() => this.props.handleClick(idx)}
                        locked={this.props.locked[idx]}
                        key={idx} val={die}
                        id={idx}
                        isRolling={this.props.isRolling && !this.props.locked[idx]}
                    />
                )}
            </div>
        )
    }
}
