import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import TopControls from '../components/PlayerControls/TopControls'
import SpectatedPlayer from '../components/PlayerControls/SpectatedPlayer'
import SecondaryPlayer from '../components/PlayerControls/SecondaryPlayer'

class PlayerControls extends Component
{
    static propTypes = {
        spectator: PropTypes.object,
        players: PropTypes.object
    };

    static defaultProps = {
        spectator: {},
        players: {}
    };

    shouldComponentUpdate(nextProps)
    {
        // TODO: shouldComponentUpdate
        return true;
    }

    render()
    {
        const { spectator, players } = this.props;

        // Don't show the PlayerControls if there's no player to spectate or in free-cam.
        // TODO: Make spectateMode an "enum".
        if (spectator.spectatedPlayer == 0 || spectator.spectateMode == 0)
            return null;

        let spectatedPlayer = players[spectator.spectatedPlayer];

        if (spectatedPlayer === null || typeof spectatedPlayer === typeof undefined)
            return null;

        // TODO: Properly get left and right players.
        let leftPlayer = players[spectator.spectatedPlayer];
        let rightPlayer = players[spectator.spectatedPlayer];

        for (let i = 1; i < ((2 * 32 * 5) + (2 * 16)); ++i)
        {
            let index = (spectator.spectatedPlayer + i) % ((2 * 32 * 5) + (2 * 16));

            if (typeof players[index] === typeof undefined || players[index] === null || !players[index])
                continue;

            if (players[index].health <= 0)
                continue;

            rightPlayer = players[index];
            break;
        }

        for (let i = 1; i < ((2 * 32 * 5) + (2 * 16)); ++i)
        {
            let index = (spectator.spectatedPlayer - i);

            if (index <= 0)
                index += ((2 * 32 * 5) + (2 * 16));

            if (typeof players[index] === typeof undefined || players[index] === null || !players[index])
                continue;

            if (players[index].health <= 0)
                continue;

            leftPlayer = players[index];
            break;
        }

        return (
            <div className="player-controls">
                <TopControls />
                <div className="player-names">
                    <SecondaryPlayer className="left" playerName={leftPlayer.name} />
                    <SpectatedPlayer playerName={spectatedPlayer.name} />
                    <SecondaryPlayer className="right" playerName={rightPlayer.name} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.player.players,
        spectator: state.spectator
    };
};

export default connect(
    mapStateToProps
)(PlayerControls);