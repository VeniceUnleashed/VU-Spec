import React, { Component, PropTypes } from 'react'

import EquipmentContainer from './EquipmentContainer'
import StatsContainer from './StatsContainer'
import EquipmentItem from './EquipmentItem'

export default class InfoContainer extends Component
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

        let className = 'info-container content-container border-top';
        className += ' team-' + player.team;

        // Gather equipment.
        let equipment = [];

        // TODO: Add in-vehicle logic.
        equipment.push(<EquipmentItem key={0} weapons={player.weapons} slot={0} active={0 == player.currentWeapon} />);
        equipment.push(<EquipmentItem key={1} weapons={player.weapons} slot={1} active={1 == player.currentWeapon} />);
        equipment.push(<EquipmentItem key={4} weapons={player.weapons} slot={4} active={4 == player.currentWeapon} />);
        equipment.push(<EquipmentItem key={5} weapons={player.weapons} slot={5} active={5 == player.currentWeapon} />);

        return (
            <div className={className}>
                <EquipmentContainer>
                    {equipment}
                </EquipmentContainer>
                <StatsContainer player={player} />
            </div>
        );
    }
}