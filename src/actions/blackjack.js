/**
 * Created by vnguyen on 8/23/16.
 */
import * as types from '../constants/actionTypes';


export function restartGame() {
    return {
        type: types.RESET_GAME
    }
}
export function playerHit() {
    return {
        type: types.PLAYER_HIT
    }
}
export function playerStand() {
    return {
        type: types.PLAYER_STAND
    }
}