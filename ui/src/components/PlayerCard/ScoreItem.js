import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
                <div className="label">{label}</div >
                <div className="value">{value}</div>
            </div>
        );
    }
}