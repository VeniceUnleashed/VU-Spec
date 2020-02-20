import React, { Component } from 'react'
import PropTypes from 'prop-types';

import TeamName from './TeamName'
import TeamScore from './TeamScore'

export default class TeamSide extends Component
{
    shouldComponentUpdate(nextProps)
    {
        let team = this.props.team || {};
        let nextTeam = nextProps.team || {};

        return this.props.teamName !== nextProps.teamName || team.score !== nextTeam.score;
    }

    render()
    {
        let score = 0;

        if (this.props.team !== null && typeof this.props.team !== typeof undefined)
            score = this.props.team.score;

        return (
            <div className="team-side">
                <TeamName name={this.props.teamName} />
                <TeamScore score={score} />
            </div>
        );
    }
}