import React, { Component, PropTypes } from 'react'

import RoundTimer from './RoundTimer'
import RoundCounter from './RoundCounter'

export default class MatchScore extends Component
{
    shouldComponentUpdate(nextProps)
    {
        return this.props.timer !== nextProps.timer ||
            this.props.timer !== nextProps.time ||
            this.props.round !== nextProps.round ||
            this.props.rounds !== nextProps.rounds;
    }

    render()
    {
        let className = 'match-score';

        if (this.props.rounds > 1)
            className += ' has-rounds';

        if (this.props.timer)
            className += ' has-timer';

        return (
            <div className={className}>
                <div>
                    <RoundTimer
                        timer={this.props.timer}
                        time={this.props.time} />
                    <RoundCounter
                        round={this.props.round}
                        rounds={this.props.rounds} />
                </div>
            </div>
        );
    }
}