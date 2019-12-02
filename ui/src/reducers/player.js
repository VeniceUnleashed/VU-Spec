import {
    SET_PLAYER,
    REMOVE_PLAYER,
    CLEAR_PLAYERS,
    SET_PLAYER_COUNT
} from '../constants/ActionTypes'

const initialState = {
    players: {},
    squads: {
        1: {},
        2: {}
    },
    playerCount: 0
};

function createStateCopy(state)
{
    return {
        players: state.players,
        squads: state.squads,
        playerCount: state.playerCount
    };
}

export default function player(state = initialState, action)
{
    switch (action.type)
    {
        case SET_PLAYER:
        {
            let finalState = createStateCopy(state);
            let playerId = action.player.id;
            let player = state.players[playerId];

            finalState.players = { ...finalState.players };
            finalState.squads = { ...finalState.squads };

            if (typeof player === 'object')
                delete finalState.squads[player.team][player.squad][playerId];

            finalState.players[playerId] = action.player;

            let squad = finalState.squads[action.player.team][action.player.squad] || {};
            squad[playerId] = true;
            finalState.squads[action.player.team][action.player.squad] = squad;

            return finalState;
        }

        case REMOVE_PLAYER:
        {
            let finalState = createStateCopy(state);

            finalState.players = { ...finalState.players };
            finalState.squads = { ...finalState.squads };

            delete finalState.squads[finalState.players[action.player].team][finalState.squads[finalState.players[action.player].squad]];
            delete finalState.players[action.player];

            return finalState;
        }

        case CLEAR_PLAYERS:
        {
            return initialState;
        }

        case SET_PLAYER_COUNT:
        {
            let finalState = createStateCopy(state);
            finalState.playerCount = action.players;
            return finalState;
        }

        default:
            return state;
    }
}