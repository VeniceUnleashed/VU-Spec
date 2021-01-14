import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Utils from '../../util/Utils'

export default class EquipmentItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { error: false };
    }

    shouldComponentUpdate(nextProps)
    {
        // TODO: shouldComponentUpdate
        // TODO: We might also need to somehow reset our state if the current weapon changes.
        return true;
    }

    render()
    {
        const { weapons, slot, active } = this.props;

        let className = 'equipment-item';

        if (active)
            className += ' active';

        if (slot >= weapons.length)
            return this.renderEmpty(className, slot);

        let weaponName = null;

        if (weapons[slot].name !== null && typeof weapons[slot].name !== typeof undefined)
        {
            weaponName = weapons[slot].name.toLowerCase();
            let weaponParts = weaponName.split('/');
            weaponName = Utils.getWeaponName(weaponParts[weaponParts.length - 1]);

            if (weaponName.length == 0)
                weaponName = null;
        }

        let displayName = 'Slot ' + slot;

        if (weapons[slot].displayName !== null && typeof weapons[slot].displayName !== typeof undefined)
        {
            let displayParts = weapons[slot].displayName.split('/');
            displayName = displayParts[displayParts.length - 1];

            if (weaponName.length == 0)
                displayName = 'Slot ' + slot;
        }

        let weaponImage = 'fb://UI/Art/Persistence/WeaponAccessory/NoSelection';


        if (!this.state.error && weaponName !== null) {
            weaponImage = Utils.getWeaponName(weaponName);
        }


        // TODO: Use frostbite asset.
        return (
            <div className={className}>
                <h1>{displayName}</h1>
                <img src={weaponImage} onError={this.imageError.bind(this)} />
            </div>
        );
    }

    imageError()
    {
        this.setState({ error: true });
    }

    renderEmpty(className, weaponSlot)
    {
        return (
            <div className={className}>
                <h1>Slot {weaponSlot + 1}</h1>
                <img src={weaponImage}/>
            </div>
        )
    }
}