import React, { Component, PropTypes } from 'react'

export default class PlayerStats extends Component
{
    static propTypes = {
        currentWeapon: PropTypes.object,
        playerName: PropTypes.string,
        id: PropTypes.number
    };

    static defaultProps = {
        currentWeapon: { ammo: '-', ammoMags: '-' },
        playerName: 'Not Connected',
        id: 0
    };

    shouldComponentUpdate(nextProps)
    {
        let props = this.props;

        return (
            props.playerName !== nextProps.playerName ||
            props.currentWeapon.ammo !== nextProps.currentWeapon.ammo ||
            props.currentWeapon.ammoMags !== nextProps.currentWeapon.ammoMags
        );
    }

    render()
    {
        const { currentWeapon, playerName, id } = this.props;

        let ammoLeft = currentWeapon.ammo;
        let ammoRight = currentWeapon.ammoMags;
        let playerKey = id.toString();

        if (ammoLeft == -1)
        {
            ammoLeft = '-';
            ammoRight = '-';
        }
        else if (ammoRight == -1)
        {
            ammoRight = '-';
        }

        switch (id)
        {
            case 10:
                playerKey = '0';
                break;

            case 11:
                playerKey = '-';
                break;

            case 12:
                playerKey = '=';
                break;
        }

        return (
            <div className="player-stats">
                <h1>{'[' + playerKey + ']' }</h1>
                <h2>{playerName}</h2>
                <h3>{'[' + ammoLeft + ' / ' + ammoRight + ']'}</h3>
            </div>
        );
    }
}