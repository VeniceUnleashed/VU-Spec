import React, { Component, PropTypes } from 'react'

import ScoreItem from './ScoreItem'

export default class ScoreContainer extends Component
{
    shouldComponentUpdate(nextProps)
    {
        // TODO: shouldComponentUpdate
        return true;
    }

    render()
    {
        const { player } = this.props;

        if (player === null || typeof player === typeof undefined)
            return null;

        let className = 'score-container content-container border-bottom';
        className += ' team-' + player.team;

        let kills = player.kills;
        let deaths = player.deaths;
        let kd = (deaths <= 0 ? kills : kills / deaths).toFixed(2);
        let score = player.score;
        let accuracy = (player.accuracy * 100).toFixed(2);

        return (
            <div className={className}>
                <ScoreItem label="K" value={kills} />
                <ScoreItem label="D" value={deaths} />
                <ScoreItem label="K / D" value={kd} />
                <ScoreItem label="Score" value={score} />
                <ScoreItem label="Accuracy" value={accuracy} />
            </div>
        );
    }
}