import React, { Component } from 'react'
import PropTypes from 'prop-types';

import PlayerStats from './PlayerStats'
import PlayerWeapon from './PlayerWeapon'
import PlayerHealth from './PlayerHealth'

export default class Player extends Component
{
    static propTypes = {
        player: PropTypes.object.isRequired,
        active: PropTypes.bool,
        id: PropTypes.number,
        teamId: PropTypes.number
    };

    static defaultProps = {
        player: { weapons:[] },
        active: false,
        id: 0,
        teamId: 0
    };

    shouldComponentUpdate(nextProps)
    {
        let props = this.props;
        let player = props.player;
        let nextPlayer = nextProps.player;
        let weapon = player.weapons[player.currentWeapon] || {};
        let nextWeapon = nextPlayer.weapons[nextPlayer.currentWeapon] || {};

        let activeChanged = props.active !== nextProps.active;
        let playerChanged = (
            player.health !== nextPlayer.health ||
            player.currentWeapon !== nextPlayer.currentWeapon ||
            weapon.ammoMags !== nextWeapon.ammoMags ||
            weapon.ammo !== nextWeapon.ammo ||
            player.name !== nextPlayer.name
        );

        return activeChanged || playerChanged;
    }

    render()
    {
        const { player, active, id, teamId } = this.props;

        let actualPlayer = player;

        let className = 'player team-' + teamId;

        if (active)
            className += ' active';

        if (player === null || typeof player === typeof undefined)
        {
            className += ' empty';

            actualPlayer = {
                weapons: [],
                health: 0,
                maxHealth: 100,
                currentWeapon: 0
            };
        }

        let weapon = actualPlayer.weapons[actualPlayer.currentWeapon];

        return (
            <div className={className}>
                <PlayerStats currentWeapon={weapon} playerName={actualPlayer.name} id={id} />
                <PlayerHealth health={actualPlayer.health} maxHealth={actualPlayer.maxHealth}/>
                <PlayerWeapon weapon={weapon} />
            </div>
        );
    }
}