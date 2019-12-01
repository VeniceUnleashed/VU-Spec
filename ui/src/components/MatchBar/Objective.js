import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Objective extends Component
{
    shouldComponentUpdate(nextProps)
    {
        let objective = this.props.objective || {};
        let nextObjective = nextProps.objective || {};

        return objective.currentTeam !== nextObjective.currentTeam ||
                objective.contested !== nextObjective.contested ||
                objective.label !== nextObjective.label;
    }

    render()
    {
        if (this.props.objective === null || typeof this.props.objective == typeof undefined)
            return null;

        let className = 'objective team-' + this.props.objective.currentTeam;

        if (this.props.objective.contested)
            className += ' contested';

        return (
            <div className={className}>
                <span className="marker">{this.props.objective.label}</span>
            </div>
        );
    }
}