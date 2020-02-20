import React, { Component } from 'react'

import MatchBar from './MatchBar'
import PlayerCard from './PlayerCard'
import SquadBlock from './SquadBlock'
import PlayerControls from './PlayerControls'
import Killfeed from './Killfeed'

export default class App extends Component
{
    render()
    {
        // TODO: Minimap and Nametags (both canvas based and *not* using redux)

        return (
            <div>
                <div className="top-container outer-container">
                    <div className="left-container inner-container">

                    </div>
                    <div className="right-container inner-container">
                        <Killfeed />
                    </div>
                    <div className="center-container inner-container">
                        <MatchBar />
                    </div>
                </div>
                <div className="mid-container outer-container">
                    <div className="left-container inner-container">
                        <SquadBlock squadId={1} teamId={1} />
                    </div>
                    <div className="right-container inner-container">
                        <SquadBlock squadId={1} teamId={2} />
                    </div>
                    <div className="center-container inner-container">

                    </div>
                </div>
                <div className="bottom-container outer-container">
                    <div className="left-container inner-container">
                    </div>
                    <div className="right-container inner-container">

                    </div>
                    <div className="center-container inner-container">
                        <PlayerControls />
                        <PlayerCard />
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount()
    {
        window.addEventListener('resize', () => this.onResize());
    }

    componentWillUnmount()
    {
        window.removeEventListener('resize', () => this.onResize());
    }

    onResize()
    {
        // Force re-render every time the window is resized.
        this.forceUpdate();
    }
}