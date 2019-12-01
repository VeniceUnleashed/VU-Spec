import * as ActionType from '../constants/ActionTypes'

const playerIds = [];
const playersPerTeam = 32;
const squadCount = 32;
const squadCapacity = 5;
const defaultPlayer = {
    health: 100,
    kills: 0,
    deaths: 0,
    score: 0,
    accuracy: 0,
    weapons:[
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

function getNum (amount) {
    return Math.random().toFixed(2) > 0.75 ? amount : 0;
}

function genNum () {
    return Math.floor(Math.random() * 100);
}

function increaseNum (current, amount) {
    amount = amount || 10;
    return current === 0 ? genNum() : (current + getNum(amount));
}

function decreaseNum (current, amount) {
    amount = amount || 10;
    let newNum = current === 0 ? genNum() : (current - getNum(amount));
    return newNum < 0 ? 0 : newNum;
}

function changeNum (current) {
    return genNum() > 50 ? current : genNum();
}

class playerData {
    constructor (id) {
        let player = store.getState().player.players[id] || defaultPlayer;
        let team = 1;
        let index = 1;

        if (id > 160) {
            team = 2;
            index = id - 160;
        } else {
            index = id;
        }

        this.id = id;
        this.realId = id + 100;
        this.name = (team === 1 ? 'NoFaTe-' : 'Kiwidog-') + id;
        this.team = team;
        this.squad = index % squadCapacity;
        this.currentWeapon = 0;
        this.health = decreaseNum(player.health);
        this.maxHealth = 120;
        this.kills = increaseNum(player.kills, 1);
        this.deaths = increaseNum(player.deaths, 1);
        this.score = increaseNum(player.score, 250);
        this.accuracy = changeNum(player.accuracy);
        this.transform = [ 0.0, 0.0, 0.0 ];
        this.screen = [ -9999.0, -9999.0 ];
        this.weapons = [
            {
                name: 'm4a1',
                displayName: 'm4a1',
                ammo: decreaseNum(player.weapons[0].ammo),
                ammoMags: 128
            },
            {
                name: 'glock17',
                displayName: 'glock17',
                ammo: decreaseNum(player.weapons[1].ammo),
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
                ammo: decreaseNum(player.weapons[6].ammo),
                ammoMags: 5
            }
        ];
    }
}

for (let teamId = 1; teamId <= 2; ++teamId)
{
    for (let playerID = 1; playerID <= playersPerTeam; ++playerID)
    {
        let squadId = Math.floor(playerID / 5) + 1;
        let playersInSquad = (playerID % 5) - 1;
        let finalPlayerID = ((teamId - 1) * squadCount * squadCapacity) + (((squadId - 1) * squadCapacity) + playersInSquad) + 1
        playerIds.push(finalPlayerID);
    }
}

store.dispatch({
    type: ActionType.SET_PLAYER_COUNT,
    players: playersPerTeam * 2
});

// Update all players every X milliseconds
window.setInterval(function(){
    playerIds.forEach(function(id){
        store.dispatch({
            type: ActionType.SET_PLAYER,
            player: new playerData(id)
        });
    });
}, 33.33);

// Change spectated player every Y seconds
window.setInterval(function(){
    store.dispatch({
        type: ActionType.SET_SPECTATED_PLAYER,
        player: playerIds[Math.floor(Math.random() * playerIds.length)]
    });
}, 3000);