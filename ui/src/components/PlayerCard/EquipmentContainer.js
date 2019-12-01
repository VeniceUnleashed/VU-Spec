import React, { Component, PropTypes } from 'react'

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