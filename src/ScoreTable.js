import React, { Component } from 'react'
import RuleRow from "./RuleRow";
import {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    threeOfKind,
    fourOfKind,
    fullHouse,
    smallStraight,
    largeStraight,
    yahtzee,
    chance
} from "./Rule";

export default class ScoreTable extends Component {


    render() {
        const { scores, doScore } = this.props

        return (
            <div className='ScoreTable'>
                <table>
                    <tbody>
                        <RuleRow
                            name='ones'
                            score={scores.ones}
                            doScore={() => doScore('ones', ones.evalRoll())}
                            description={ones.description}
                        />

                        <RuleRow
                            name='twos'
                            score={scores.twos}
                            doScore={() => doScore('twos', twos.evalRoll())}
                            description={twos.description}
                        />

                        <RuleRow
                            name='threes'
                            score={scores.threes}
                            doScore={() => doScore('threes', threes.evalRoll())}
                            description={threes.description}
                        />

                        <RuleRow
                            name='fours'
                            score={scores.fours}
                            doScore={() => doScore('fours', fours.evalRoll())}
                            description={fours.description}
                        />

                        <RuleRow
                            name='fives'
                            score={scores.fives}
                            doScore={() => doScore('fives', fives.evalRoll())}
                            description={fives.description}
                        />

                        <RuleRow
                            name='sixes'
                            score={scores.sixes}
                            doScore={() => doScore('sixes', sixes.evalRoll())}
                            description={sixes.description}
                        />

                        <RuleRow
                            name='three of kind'
                            score={scores.threeOfKind}
                            doScore={() => doScore('threeOfKind', threeOfKind.evalRoll())}
                            description={threeOfKind.description}
                        />

                        <RuleRow
                            name='four of kind'
                            score={scores.fourOfKind}
                            doScore={() => doScore('fourOfKind', fourOfKind.evalRoll())}
                            description={fourOfKind.description}
                        />

                        <RuleRow
                            name='full house'
                            score={scores.fullHouse}
                            doScore={() => doScore('fullHouse', fullHouse.evalRoll())}
                            description={fullHouse.description}
                        />

                        <RuleRow
                            name='small straight'
                            score={scores.smallStraight}
                            doScore={() => doScore('smallStraight', smallStraight.evalRoll())}
                            description={smallStraight.description}
                        />

                        <RuleRow
                            name='large straight'
                            score={scores.largeStraight}
                            doScore={() => doScore('largeStraight', largeStraight.evalRoll())}
                            description={largeStraight.description}
                        />

                        <RuleRow
                            name='yahtzee'
                            score={scores.yahtzee}
                            doScore={() => doScore('yahtzee', yahtzee.evalRoll())}
                            description={yahtzee.description}
                        />

                        <RuleRow
                            name='chance'
                            score={scores.chance}
                            doScore={() => doScore('chance', chance.evalRoll())}
                            description={chance.description}
                        />
                    </tbody>
                </table>
            </div>
        )
    }
}
