import {
    SET_SPECTATED_PLAYER,
    SET_SPECTATE_MODE,
    TOGGLE_PLAYER_SCORE,
    SET_CURRENT_POSITION
} from '../constants/ActionTypes'

const initialState = {
    spectatedPlayer: 0,
    spectateMode: 0,
    showPlayerScore: false,
    currentPosition: [0, 0, 0]
};

function createStateCopy(state)
{
    return {
        spectatedPlayer: state.spectatedPlayer,
        spectateMode: state.spectateMode,
        showPlayerScore: state.showPlayerScore,
        currentPosition: state.currentPosition
    };
}

export default function spectator(state = initialState, action)
{
    switch (action.type)
    {
        case SET_SPECTATED_PLAYER:
        {
            let finalState = createStateCopy(state);
            finalState.spectatedPlayer = action.player;

            return finalState;
        }

        case SET_SPECTATE_MODE:
        {
            let finalState = createStateCopy(state);
            finalState.spectateMode = action.mode;

            return finalState;
        }

        case TOGGLE_PLAYER_SCORE:
        {
            let finalState = createStateCopy(state);
            finalState.showPlayerScore = !state.showPlayerScore;

            return finalState;
        }

        case SET_CURRENT_POSITION:
        {
            let finalState = createStateCopy(state);
            finalState.currentPosition = action.position;

            return finalState;
        }

        default:
            return state;
    }
}