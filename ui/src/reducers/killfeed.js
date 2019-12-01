import {
    SET_KILLFEED_KILLS
} from '../constants/ActionTypes'

const initialState = {
    kills: []
};

export default function killfeed(state = initialState, action)
{
    switch (action.type)
    {
        case SET_KILLFEED_KILLS:
        {
            return {
                kills: action.kills
            };
        }

        default:
            return state;
    }
}