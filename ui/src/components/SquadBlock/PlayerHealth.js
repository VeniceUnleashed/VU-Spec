import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class PlayerHealth extends Component
{
    static propTypes = {
        health: PropTypes.number,
        maxHealth: PropTypes.number
    };

    static defaultProps = {
        health: 0,
        maxHealth: 0
    };

    shouldComponentUpdate(nextProps)
    {
        return this.props.health !== nextProps.health ||
            this.props.maxHealth !== nextProps.maxHealth;
    }

    render()
    {
        const { health, maxHealth } = this.props;

        let percentage = 0.0;

        if (health)
            percentage = (health / maxHealth) * 100.0;

        if (percentage < 0.0)
            percentage = 0.0;

        if (percentage > 100.0)
            percentage = 100.0;

        let negativePercentage = 100.0 - percentage;
        let displayPercentage = parseInt(Math.round(percentage), 10);

        return (
            <div className="health-bar progress-bar">
                <div className="bar positive" style={{ width: percentage + '%' }}>
                    <div className="percentage">{displayPercentage + '%'}</div>
                </div>
                <div className="bar negative" style={{ width: negativePercentage + '%' }}>
                    <div className="percentage">{displayPercentage + '%'}</div>
                </div>
            </div>
        );
    }
}