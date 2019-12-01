import React, { Component, PropTypes } from 'react'

export default class TopControls extends Component
{
    shouldComponentUpdate()
    {
        return false;
    }

    render()
    {
        return (
            <div className="top-controls">
                <i className="fa fa-caret-left left-arrow"/>
                <span>Spectating</span>
                <i className="fa fa-caret-right right-arrow"/>
            </div>
        );
    }
}