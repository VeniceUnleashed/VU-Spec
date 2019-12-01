import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class EquipmentContainer extends Component
{
    render()
    {
        return (
            <div className="equipment-container">
                {this.props.children}
            </div>
        );
    }
}