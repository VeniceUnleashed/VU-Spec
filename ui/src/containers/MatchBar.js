import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import TeamSide from '../components/MatchBar/TeamSide'
import MatchScore from '../components/MatchBar/MatchScore'
import ObjectiveBar from '../components/MatchBar/ObjectiveBar'
import TeamContainer from '../components/MatchBar/TeamContainer'

class MatchBar extends Component
{
    shouldComponentUpdate(nextProps)
    {
        // TODO: shouldComponentUpdate
        return true;
    }

    render()
    {
        const { teams, gamemode, teamNames } = this.props;

        if (teams.length == 0)
            return null;

        let items = [];

        // Start from team 1 to skip spectators.
        for (let i = 1; i < teams.length; ++i)
            items.push(<TeamSide key={i} team={teams[i]} teamName={teamNames[i]} />);

        return (
            <div className="match-bar">
                <TeamContainer>
                    {items}
                    <MatchScore
                        gamemode={gamemode.currentGamemode}
                        round={gamemode.currentRound}
                        rounds={gamemode.totalRounds}
                        timer={gamemode.hasTimer}
                        time={gamemode.timeLeft} />
                </TeamContainer>
                <ObjectiveBar
                    gamemode={gamemode.currentGamemode}
                    objectives={gamemode.objectives} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.team.teams,
        teamNames: state.team.teamNames,
        gamemode: state.gamemode
    };
};

export default connect(
    mapStateToProps
)(MatchBar);