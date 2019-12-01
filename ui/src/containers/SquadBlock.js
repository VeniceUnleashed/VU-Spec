import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Player from '../components/SquadBlock/Player'

class SquadBlock extends Component
{
    static propTypes = {
        spectator: PropTypes.object,
        team: PropTypes.object,
        squads: PropTypes.object,
        teamId: PropTypes.number,
        squadId: PropTypes.number,
        player: PropTypes.object,
        players: PropTypes.object
    };

    static defaultProps = {
        spectator: { spectatedPlayer: 0 },
        team: {},
        squads: {},
        teamId: 1,
        squadId: 1,
        player: {},
        players: {}
    };

    shouldComponentUpdate(nextProps)
    {
        let props = this.props;

        let spectatedPlayer = props.spectator.spectatedPlayer;
        let nextSpectatedPlayer = nextProps.spectator.spectatedPlayer;

        // Did the player we were spectating change?
        if (spectatedPlayer !== nextSpectatedPlayer)
            return true;

        // Did the team and squad we're representing change? (this should never happen)
        if (props.teamId !== nextProps.teamId || props.squadId !== nextProps.squadId)
            return true;

        // Did our squad members change?
        let currentSquadIds = Object.keys(props.squads[props.teamId] ? (props.squads[props.teamId][props.squadId] || {}) : {});
        let nextSquadIds = Object.keys( nextProps.squads[nextProps.teamId] ? nextProps.squads[nextProps.teamId][nextProps.squadId] || {} : {});

        if (currentSquadIds.join('') !== nextSquadIds.join(''))
            return true;

        // Did the info of any player we care about change?
        return typeof currentSquadIds.find(
            (id) => {
                let nextPlayer = nextProps.players[id];
                let player = props.players[id];

                if ((typeof player === 'undefined' || player === null) &&
                    (typeof nextPlayer !== 'undefined' && nextPlayer !== null))
                    return true;

                if ((typeof nextPlayer === 'undefined' || nextPlayer === null) &&
                    (typeof player !== 'undefined' && player !== null))
                    return true;

                // References the same object; not changed.
                if (nextPlayer === player)
                    return false;

                let weapon = player.weapons[player.currentWeapon] || {};
                let nextWeapon = nextPlayer.weapons[nextPlayer.currentWeapon] || {};

                return (
                    player.health !== nextPlayer.health ||
                    player.currentWeapon !== nextPlayer.currentWeapon ||
                    weapon.ammoMags !== nextWeapon.ammoMags ||
                    weapon.ammo !== nextWeapon.ammo ||
                    player.name !== nextPlayer.name
                );
            }
        ) !== 'undefined';
    }

    render()
    {
        const { spectator, team, teamId, squadId, player } = this.props;

        if (teamId >= team.teams.length)
            return null;

        let className = 'squad-block content-container border-top';
        className += ' team-' + teamId;

        let players = [];

        let playerCount = team.teams[teamId].squadCapacity;

        for (let i = 0; i < playerCount; ++i)
        {
            let playerID = ((teamId - 1) * 32 * playerCount) + (((squadId - 1) * 32) + i) + 1;
            let squadPlayer = player.players[playerID];
            let playerKey = ((teamId - 1) * playerCount) + i + 1;
            let active = squadPlayer && playerID == spectator.spectatedPlayer;

            players.push(<Player key={playerID} id={playerKey} player={squadPlayer} active={active} teamId={teamId} />);
        }

        return (
            <div className={className}>
                {players}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spectator: state.spectator,
        player: state.player,
        players: state.player.players,
        squads: state.player.squads,
        team: state.team
    };
};

export default connect(
    mapStateToProps
)(SquadBlock);