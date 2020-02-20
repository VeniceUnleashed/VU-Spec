import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class RoundTimer extends Component
{
    shouldComponentUpdate(nextProps)
    {
        return this.props.timer !== nextProps.timer || this.props.time !== nextProps.time;
    }

    render()
    {
        if (!this.props.timer)
            return null;

        let totalSeconds = this.props.time < 0 ? 0 : this.props.time;

        let minutes = parseInt(totalSeconds / 60) % 60;
        let seconds = totalSeconds % 60;

        let finalTime = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds  < 10 ? '0' + seconds : seconds);

        return (
            <div className="round-timer">
                {finalTime}
            </div>
        );
    }
}