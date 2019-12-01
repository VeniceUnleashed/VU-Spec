import {
    SET_TEAMS,
    SET_TEAM_NAME
} from '../constants/ActionTypes'

const initialState = {
    teams: [],
    teamNames: []
};

export default function team(state = initialState, action)
{
    switch (action.type)
    {
        case SET_TEAMS:
        {
            let finalState = {
                teams: action.teams,
                teamNames: []
            };

            for (let i = 0; i < action.teams.length; ++i)
                finalState.teamNames.push('Team ' + i);

            return finalState;
        }

        case SET_TEAM_NAME:
        {
            if (action.team >= state.teams.length)
                return state;

            return {
                teams: state.teams,
                teamNames: [
                    ...state.teamNames.slice(0, action.team),
                    action.name,
                    ...state.teamNames.slice(action.team + 1)
                ]
            };
        }

        default:
            return state;
    }
}