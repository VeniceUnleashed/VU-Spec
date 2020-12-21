import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Utils from '../../util/Utils'

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
                    <div className="img-container">
                        <img src={Utils.getWeaponName(label.toLowerCase())}/>
                    </div>
                    <span>{leftLabel + ' / ' + rightLabel}</span>
                </div>
            </div>
        );
    }
}