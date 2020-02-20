import { combineReducers } from 'redux'
import { default as spectator } from './spectator'
import { default as team } from './team'
import { default as gamemode } from './gamemode'
import { default as player } from './player'
import { default as killfeed } from './killfeed'

export default combineReducers({
    spectator,
    team,
    gamemode,
    player,
    killfeed
});