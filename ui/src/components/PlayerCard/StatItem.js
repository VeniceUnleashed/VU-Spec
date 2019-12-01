import React, { Component, PropTypes } from 'react'

export default class StatItem extends Component
{
    shouldComponentUpdate(nextProps)
    {
        const { label, left, right } = this.props;

        return label !== nextProps.label ||
                left !== nextProps.left ||
                right !== nextProps.right;
    }

    render()
    {
        const { label, left, right } = this.props;

        let leftLabel = left < 0 ? '-' : left;
        let rightLabel = right < 0 ? '-' : right;

        return (
            <div className="stat-item">
                <h1>{label}</h1>
                <div className="item-container">
                    <i className="fa fa-file-o" />
                    <span>{leftLabel + ' / ' + rightLabel}</span>
                </div>
            </div>
        );
    }
}