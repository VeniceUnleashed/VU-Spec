import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Kill extends Component
{
    render()
    {
        const { killer, killed, weapon } = this.props;

        let killerClass = killer !== null ? 'player-name killer team-' + killer.team : '';
        let killerName = killer !== null ? killer.name : '';

        let killedClass = 'player-name killed team-' + killed.team;

        let weaponParts = weapon.split('/');
        let weaponName = weaponParts[weaponParts.length - 1];

        return (
            <div className="kill">
                <span className={killerClass}>{killerName}</span>
                <span className="weapon">{weaponName}</span>
                <span className={killedClass}>{killed.name}</span>
            </div>
        );
    }
}