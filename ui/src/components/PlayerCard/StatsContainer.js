import React, { Component, PropTypes } from 'react'

import StatBar from './StatBar'
import StatItem from './StatItem'

export default class StatsContainer extends Component
{
    shouldComponentUpdate(nextProps)
    {
        // TODO: shouldComponentUpdate
        return true;
    }

    render()
    {
        const { player } = this.props;

        let healthPercentage = 0;
        let vehiclePercentage = 0;
        let hasVehicle = false;

        let hasPlayer = player !== null && typeof player !== typeof undefined;

        if (hasPlayer && player.maxHealth !== 0)
            healthPercentage = (player.health / player.maxHealth) * 100.0;

        // TODO: Vehicle logic.

        // Get current weapon.
        let currentWeapon = null;
        let grenades = null;

        if (hasPlayer)
        {
            currentWeapon = player.weapons[player.currentWeapon];
            grenades = player.weapons[6];
        }

        let currentAmmoLeft = -1;
        let currentAmmoRight = -1;

        let grenadesAmmoLeft = -1;
        let grenadesAmmoRight = -1;

        if (currentWeapon !== null && typeof currentWeapon !== typeof undefined)
        {
            currentAmmoLeft = currentWeapon.ammo;
            currentAmmoRight = currentWeapon.ammoMags;
        }

        if (grenades !== null && typeof grenades !== typeof undefined)
        {
            grenadesAmmoLeft = grenades.ammo;
            grenadesAmmoRight = grenades.ammoMags;
        }

        return (
            <div className="stats-container">
                <div className="left-container">
                    <StatBar icon="plus" active={true} percentage={healthPercentage} />
                    <StatBar icon="cogs" active={hasVehicle} percentage={vehiclePercentage} />
                </div>
                <div className="right-container">
                    <StatItem label="Ammo" left={currentAmmoLeft} right={currentAmmoRight} />
                    <StatItem label="Grenades" left={grenadesAmmoLeft} right={grenadesAmmoRight} />
                </div>
            </div>
        );
    }
}