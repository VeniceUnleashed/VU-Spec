import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import InfoContainer from '../components/PlayerCard/InfoContainer'
import ScoreContainer from '../components/PlayerCard/ScoreContainer'

class PlayerCard extends Component
{
    static propTypes = {
        spectator: PropTypes.object,
        player: PropTypes.object,
        players: PropTypes.object
    };

    static defaultProps = {
        spectator: { spectatedPlayer: 0 },
        player: {},
        players: {}
    };

    shouldComponentUpdate(nextProps)
    {
        let props = this.props;

        let spectatedPlayer = props.spectator.spectatedPlayer;
        let nextSpectatedPlayer = nextProps.spectator.spectatedPlayer;

        if (spectatedPlayer !== nextSpectatedPlayer)
            return true;

        let nextPlayer = nextProps.players[spectatedPlayer];
        let player = props.players[spectatedPlayer];

        if ((typeof player === 'undefined' || player === null) &&
            (typeof nextPlayer !== 'undefined' && nextPlayer !== null))
            return true;

        if ((typeof nextPlayer === 'undefined' || nextPlayer === null) &&
            (typeof player !== 'undefined' && player !== null))
            return true;

        // References the same object; not changed.
        if (nextPlayer === player)
            return false;

        // Check if any of the player stats changed.
        if (player.health !== nextPlayer.health ||
            player.currentWeapon !== nextPlayer.currentWeapon ||
            player.score !== nextPlayer.score ||
            player.kills !== nextPlayer.kills ||
            player.deaths !== nextPlayer.deaths ||
            player.accuracy !== nextPlayer.accuracy)
            return true;

        // Check if any of our weapons have changed.
        if (player.weapons.length !== nextPlayer.weapons.length)
            return true;

        for (let i = 0; i < player.weapons.length; ++i)
        {
            let weapon = player.weapons[i] || {};
            let nextWeapon = nextPlayer.weapons[i] || {};

            if (weapon === nextWeapon)
                continue;

            if (weapon.name !== nextWeapon.name ||
                weapon.displayName !== nextWeapon.displayName ||
                weapon.ammo !== nextWeapon.ammo ||
                weapon.ammoMags !== nextWeapon.ammoMags)
                return true;
        }

        return false;
    }

    render()
    {
        const { spectator, player } = this.props;

        // Don't show the PlayerCard if there's no player to spectate or in free-cam.
        // TODO: Make spectateMode an "enum".
        if (spectator.spectatedPlayer == 0 || spectator.spectateMode == 0)
            return null;

        let className = 'player-card';

        if (spectator.showPlayerScore)
            className += ' show-score';

        let spectatedPlayer = player.players[spectator.spectatedPlayer];

        if (spectatedPlayer === null || typeof spectatedPlayer === typeof undefined)
            return null;

        return (
            <div className={className}>
                <InfoContainer player={spectatedPlayer} />
                <ScoreContainer player={spectatedPlayer} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spectator: state.spectator,
        player: state.player,
        players: state.player.players
    };
};

export default connect(
    mapStateToProps
)(PlayerCard);