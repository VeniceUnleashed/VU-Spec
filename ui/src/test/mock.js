import * as ActionType from '../constants/ActionTypes'

store.dispatch({
    type: ActionType.SET_TEAMS,
    teams: [
        { id: 0, score: 0, maxPlayers: 16, squadCapacity: 5 },
        { id: 1, score: 0, maxPlayers: 16, squadCapacity: 5 },
        { id: 2, score: 200, maxPlayers: 16, squadCapacity: 5 }
    ]
});

store.dispatch({
    type: ActionType.SET_CURRENT_GAMEMODE,
    gamemode: 'ConquestSmall0'
});

store.dispatch({
    type: ActionType.SET_CURRENT_ROUND,
    round: 1
});

store.dispatch({
    type: ActionType.SET_TOTAL_ROUNDS,
    rounds: 2
});

store.dispatch({
    type: ActionType.SET_HAS_TIMER,
    timer: false
});

store.dispatch({
    type: ActionType.SET_TIME_LEFT,
    time: 817
});

store.dispatch({
    type: ActionType.ADD_OBJECTIVE,
    objective: {
        label: 'A',
        currentTeam: 1,
        contested: false
    }
});

store.dispatch({
    type: ActionType.ADD_OBJECTIVE,
    objective: {
        label: 'B',
        currentTeam: 1,
        contested: false
    }
});

store.dispatch({
    type: ActionType.ADD_OBJECTIVE,
    objective: {
        label: 'C',
        currentTeam: 0,
        contested: false
    }
});

store.dispatch({
    type: ActionType.ADD_OBJECTIVE,
    objective: {
        label: 'D',
        currentTeam: 2,
        contested: true
    }
});

store.dispatch({
    type: ActionType.ADD_OBJECTIVE,
    objective: {
        label: 'E',
        currentTeam: 2,
        contested: false
    }
});

store.dispatch({
    type: ActionType.SET_SPECTATE_MODE,
    mode: 1
});

let playerData = {
    id: 1,
    realId: 1,
    name: 'NoFaTe',
    team: 1,
    squad: 1,
    currentWeapon: 0,
    health: 80,
    maxHealth: 120,
    kills: 32,
    deaths: 5,
    score: 1234,
    accuracy: 0.95,
    transform: [ 0.0, 0.0, 0.0 ],
    screen: [ -9999.0, -9999.0 ],
    weapons: [
        {
            name: 'm4a1',
            displayName: 'm4a1',
            ammo: 32,
            ammoMags: 128
        },
        {
            name: 'glock17',
            displayName: 'glock17',
            ammo: 32,
            ammoMags: 128
        },
        {
            name: 'unknown',
            displayName: 'unknown',
            ammo: 32,
            ammoMags: 128
        },
        {
            name: 'equipment',
            displayName: 'equipment',
            ammo: 32,
            ammoMags: 128
        },
        {
            name: 'defib',
            displayName: 'defib',
            ammo: 32,
            ammoMags: 128
        },
        {
            name: 'c4',
            displayName: 'c4',
            ammo: 32,
            ammoMags: 128
        },
        {
            name: 'grenades',
            displayName: 'grenades',
            ammo: 1,
            ammoMags: 2
        }
    ]
};

store.dispatch({
    type: ActionType.SET_PLAYER,
    player: playerData
});

store.dispatch({
    type: ActionType.SET_PLAYER,
    player: {
        ...playerData,
        id: 2,
        realId: 2,
        name: 'NoFaTe2'
    }
});

store.dispatch({
    type: ActionType.SET_PLAYER,
    player: {
        ...playerData,
        id: 3,
        realId: 3,
        name: 'NoFaTe3'
    }
});

store.dispatch({
    type: ActionType.SET_PLAYER,
    player: {
        ...playerData,
        id: 4,
        realId: 4,
        name: 'NoFaTe4'
    }
});

store.dispatch({
    type: ActionType.SET_PLAYER,
    player: {
        ...playerData,
        id: 5,
        realId: 5,
        name: 'NoFaTe5'
    }
});

store.dispatch({
    type: ActionType.SET_PLAYER,
    player: {
        ...playerData,
        id: 161,
        realId: 6,
        team: 2,
        name: 'kiwidog'
    }
});

store.dispatch({
    type: ActionType.SET_PLAYER,
    player: {
        ...playerData,
        id: 162,
        realId: 7,
        team: 2,
        name: 'kiwidog2'
    }
});

store.dispatch({
    type: ActionType.SET_PLAYER,
    player: {
        ...playerData,
        id: 163,
        realId: 8,
        team: 2,
        name: 'kiwidog3'
    }
});

store.dispatch({
    type: ActionType.SET_PLAYER,
    player: {
        ...playerData,
        id: 164,
        realId: 9,
        team: 2,
        name: 'kiwidog4'
    }
});

store.dispatch({
    type: ActionType.SET_PLAYER,
    player: {
        ...playerData,
        id: 165,
        realId: 10,
        team: 2,
        name: 'kiwidog5'
    }
});

store.dispatch({
    type: ActionType.SET_PLAYER_COUNT,
    player: 10
});

store.dispatch({
    type: ActionType.SET_SPECTATED_PLAYER,
    player: 163
});

store.dispatch({ type: 19, kills: [{
    killer: 1,
    killed: 162,
    weapon: 'M4A1'
},
{
    killer: 161,
    killed: 2,
    weapon: 'M4A1'
}] });