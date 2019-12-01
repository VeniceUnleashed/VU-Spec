import React, { Component, PropTypes } from 'react'

export default class TeamContainer extends Component
{
    render()
    {
        if ((Array.isArray(this.props.children) && this.props.children.length == 0) || !this.props.children)
            return null;

        return (
            <div className="team-container">
                {this.props.children}
            </div>
        );
    }
}