import React, { Component, PropTypes } from 'react'

export default class StatBar extends Component
{
    shouldComponentUpdate(nextProps)
    {
        const { icon, percentage, active } = this.props;

        return icon !== nextProps.icon ||
                percentage !== nextProps.percentage ||
                active !== nextProps.active;
    }

    render()
    {
        const { icon, percentage, active } = this.props;

        let className = 'stat-bar progress-bar';
        className += ' ' + icon;

        if (active)
            className += ' active';

        let displayPercentage = parseInt(Math.round(percentage), 10);
        let negativePercentage = 100.0 - percentage;

        return (
            <div className={className}>
                <div className="bar positive" style={{ width: percentage + '%' }}>
                    <div className="percentage">{displayPercentage + '%'}<span className="right-content"><i className={'fa fa-' + icon } /></span></div>
                </div>
                <div className="bar negative" style={{ width: negativePercentage + '%' }}>
                    <div className="percentage">{displayPercentage + '%'}<span className="right-content"><i className={'fa fa-' + icon } /></span></div>
                </div>
            </div>
        );
    }
}