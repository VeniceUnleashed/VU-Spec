import React, { Component, PropTypes } from 'react'

export default class RoundCounter extends Component
{
    shouldComponentUpdate(nextProps)
    {
        return this.props.rounds !== nextProps.rounds || this.props.round !== nextProps.round;
    }

    render()
    {
        if (this.props.rounds <= 1)
            return null;

        return (
            <div className="round-counter">
                <span className="current-round">{this.props.round}</span><span className="round-separator">/</span><span className="total-rounds">{this.props.rounds}</span>
            </div>
        );
    }
}