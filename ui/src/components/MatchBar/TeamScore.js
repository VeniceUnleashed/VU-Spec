import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TeamScore extends Component
{
    shouldComponentUpdate(nextProps)
    {
        return this.props.score !== nextProps.score;
    }

    render()
    {
        return (
            <div className="team-score">
                {this.props.score}
            </div>
        );
    }
}