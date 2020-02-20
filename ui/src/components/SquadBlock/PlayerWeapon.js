import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Utils from '../../util/Utils'

export default class PlayerWeapon extends Component
{
    shouldComponentUpdate(nextProps)
    {
        // TODO: shouldComponentUpdate
        return true;
    }

    render()
    {
        // TODO: Fix weapon display
        return null;

        const { weapon } = this.props;

        if (!weapon)
            return null;

        let weaponName = weapon.name.toLowerCase();
        let weaponParts = weaponName.split('/');
        weaponName = Utils.getWeaponName(weaponParts[weaponParts.length - 1]);

        // TODO: Use frostbite asset.
        return (
            <div className="player-weapon">
                <img src={require('../../../assets/img/weapons/' + weaponName + '.png')} />
            </div>
        );
    }
}