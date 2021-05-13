import React, { Component } from 'react'

export default class RuleRow extends Component {
    render() {

        const isScore = this.props.score === undefined
        return (
            <tr onClick={isScore ? this.props.doScore : null} className={`${isScore ? '' : 'tr-disabled'}`}>
                <td>{this.props.name}</td>
                <td className={`${isScore ? 'notSavedScore' : 'savedScore'}`}>{isScore ? this.props.description : this.props.score}</td>
            </tr>
        )
    }
}
