import React, { Component, PropTypes } from 'react'

import Objective from './Objective'

export default class ObjectiveBar extends Component
{
    shouldComponentUpdate(nextProps)
    {
        let objectives = this.props.objectives || [];
        let nextObjectives = nextProps.objectives || [];

        if (objectives.length !== nextObjectives.length)
            return true;

        for (let i = 0; i < objectives.length; ++i)
        {
            let objective = this.props.objective || {};
            let nextObjective = nextProps.objective || {};

            if (objective.currentTeam !== nextObjective.currentTeam ||
                objective.contested !== nextObjective.contested ||
                objective.label !== nextObjective.label)
                return true;
        }

        return false;
    }

    render()
    {
        if (this.props.objectives.length == 0)
            return null;

        let objectives = [];

        for (let i = 0; i < this.props.objectives.length; ++i)
            objectives.push(<Objective key={i} objective={this.props.objectives[i]} />);

        return (
            <div className="objective-bar">
                {objectives}
            </div>
        );
    }
}