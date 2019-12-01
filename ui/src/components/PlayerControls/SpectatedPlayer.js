import React, { Component, PropTypes } from 'react'

export default class SpectatedPlayer extends Component
{
    static propTypes = {
        playerName: PropTypes.string
    };

    static defaultProps = {
        playerName: ''
    };

    shouldComponentUpdate(nextProps)
    {
        return this.props.playerName !== nextProps.playerName;
    }

    render()
    {
        return (
            <div className="spectated-player">
                {this.props.playerName}
            </div>
        );
    }
}