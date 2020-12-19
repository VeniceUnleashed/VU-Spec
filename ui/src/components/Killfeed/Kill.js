import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Kill extends Component
{
    render()
    {
        const { killer, killed, weapon } = this.props;

        let killerClass = killer ? 'player-name killer ' : '';
        killerClass = killer && killer.team ? killerClass + 'team-' + killer.team : killerClass
        let killerName = killer ? killer.name : '';

        let killedClass = 'player-name killed ';
        killedClass = killed && killed.team ? killedClass + 'team-' + killed.team : killedClass;

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