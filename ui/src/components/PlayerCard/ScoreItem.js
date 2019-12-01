import React, { Component, PropTypes } from 'react'

export default class ScoreItem extends Component
{
    shouldComponentUpdate(nextProps)
    {
        const { label, value } = this.props;
        return label !== nextProps.label || value !== nextProps.value;
    }

    render()
    {
        const { label, value } = this.props;

        return (
            <div className="score-item">
                <h1>{label}</h1>
                <span>{value}</span>
            </div>
        );
    }
}