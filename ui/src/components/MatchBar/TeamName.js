import React, { Component, PropTypes } from 'react'

export default class TeamName extends Component
{
    shouldComponentUpdate(nextProps)
    {
        return this.props.name !== nextProps.name;
    }

    render()
    {
        return (
            <div className="team-name">
                {this.props.name}
            </div>
        );
    }
}