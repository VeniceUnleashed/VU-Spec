import {
    SET_CURRENT_GAMEMODE,
    SET_CURRENT_ROUND,
    SET_TOTAL_ROUNDS,
    SET_HAS_TIMER,
    SET_TIME_LEFT,
    ADD_OBJECTIVE,
    CLEAR_OBJECTIVES,
    REMOVE_OBJECTIVE,
    UPDATE_OBJECTIVE
} from '../constants/ActionTypes'

const initialState = {
    currentGamemode: null,
    currentRound: 0,
    totalRounds: 0,
    hasTimer: false,
    timeLeft: 0,
    objectives: []
};

function createStateCopy(state)
{
    return {
        currentGamemode: state.currentGamemode,
        currentRound: state.currentRound,
        totalRounds: state.totalRounds,
        hasTimer: state.hasTimer,
        timeLeft: state.timeLeft,
        objectives: state.objectives
    };
}

export default function gamemode(state = initialState, action)
{
    switch (action.type)
    {
        case SET_CURRENT_GAMEMODE:
        {
            let finalState = createStateCopy(state);
            finalState.currentGamemode = action.gamemode;

            return finalState;
        }

        case SET_CURRENT_ROUND:
        {

            let finalState = createStateCopy(state);
            finalState.currentRound = action.round;

            return finalState;
        }

        case SET_TOTAL_ROUNDS:
        {
            let finalState = createStateCopy(state);
            finalState.totalRounds = action.rounds;

            return finalState;
        }

        case SET_HAS_TIMER:
        {
            let finalState = createStateCopy(state);
            finalState.hasTimer = action.timer;

            return finalState;
        }

        case SET_TIME_LEFT:
        {
            let finalState = createStateCopy(state);
            finalState.timeLeft = action.time;

            return finalState;
        }

        case ADD_OBJECTIVE:
        {
            let finalState = createStateCopy(state);
            finalState.objectives = [...finalState.objectives, action.objective];

            return finalState;
        }

        case REMOVE_OBJECTIVE:
        {
            if (action.index < 0 || action.index >= state.objectives.length)
                return state;

            let finalState = createStateCopy(state);
            finalState.objectives = [
                ...state.objectives.slice(0, action.index),
                ...state.objectives.slice(action.index + 1)
            ];

            return finalState;
        }

        case UPDATE_OBJECTIVE:
        {
            if (action.index < 0 || action.index >= state.objectives.length)
                return state;

            let finalState = createStateCopy(state);

            finalState.objectives = [...finalState.objectives];
            finalState.objectives[action.index] = action.objective;

            return finalState;
        }

        case CLEAR_OBJECTIVES:
        {
            let finalState = createStateCopy(state);
            finalState.objectives = [];

            return finalState;
        }

        default:
            return state;
    }
}