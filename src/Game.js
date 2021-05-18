import React, { Component } from 'react'
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";

const DICE_NUM = 5;
const ROLE_NUM = 4;

export default class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dice: Array.from({ length: DICE_NUM }),
            locked: Array(DICE_NUM).fill(false),
            rolesLeft: ROLE_NUM,
            scores: {
                ones: undefined,
                twos: undefined,
                threes: undefined,
                fours: undefined,
                fives: undefined,
                sixes: undefined,
                threeOfKind: undefined,
                fourOfKind: undefined,
                fullHouse: undefined,
                smallStraight: undefined,
                largeStraight: undefined,
                yahtzee: undefined,
                chance: undefined,
            },
            isRolling: false,
            totalScores: 0
        }
    }

    toggleLocked = (idx) => {
        if (this.state.rolesLeft > 0 && !this.state.isRolling) {
            this.setState(st => ({
                locked: [...st.locked.slice(0, idx),
                !st.locked[idx],
                ...st.locked.slice(idx + 1)]
            }))
        }
    }

    roll = () => {
        this.setState(st => ({
            dice: st.dice.map((d, i) =>
                st.locked[i] ? d : Math.ceil(Math.random() * 5)),
            locked: st.rolesLeft > 1 ? st.locked : Array(DICE_NUM).fill(true),
            rolesLeft: st.rolesLeft - 1,
            isRolling: false
        }))
    }

    doScore = (ruleName, ruleFunction) => {

        let totalScores = 0
        this.setState(st => ({
            scores: {
                ...st.scores, [ruleName]: ruleFunction(this.state.dice.map(d => d + 1))
            },
            rolesLeft: ROLE_NUM,
            locked: Array(DICE_NUM).fill(false)
        }), () => { this.generateTotal(this.state.scores[ruleName]) })
        this.animateRoll()
    }

    generateTotal = (newScore) => {
        this.setState(prevState => (
            { ...prevState, totalScores: prevState.totalScores + newScore }
        ))
    }

    animateRoll = () => {
        this.setState({ isRolling: true }, () => {
            setTimeout(this.roll, 1000)
        })
    }

    componentDidMount() {
        this.animateRoll()
    }

    render() {
        return (
            <div className='Game'>
                <header>
                    <h1>yahtzee</h1>
                    <Dice dice={this.state.dice} locked={this.state.locked} handleClick={this.toggleLocked} isRolling={this.state.isRolling} />
                    <button
                        onClick={this.animateRoll}
                        disabled={this.state.locked.every(x => x)
                            || this.state.rolesLeft === 0 || this.state.isRolling} >
                        Rolling ({this.state.rolesLeft})
                    </button>
                </header>
                <ScoreTable
                    scores={this.state.scores}
                    doScore={this.doScore}
                    totalScores={this.state.totalScores}
                />
            </div>
        )
    }
}
