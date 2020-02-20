import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class SecondaryPlayer extends Component
{
    static propTypes = {
        playerName: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        playerName: '',
        className: ''
    };

    shouldComponentUpdate(nextProps)
    {
        let props = this.props;
        return props.playerName !== nextProps.playerName || props.className !== nextProps.className;
    }

    render()
    {
        let className = 'secondary-player';

        if (this.props.className)
            className += ' ' + this.props.className;

        return (
            <div className={className}>
                {this.props.playerName}
            </div>
        );
    }
}