/**
 * Created by vnguyen on 8/23/16.
 */
import {FaceValues} from 'playing-card-models';

const mappingValues = {};

mappingValues[FaceValues.ACE] = [1, 11];
mappingValues[FaceValues.KING] = 10;
mappingValues[FaceValues.KING] = 10;
mappingValues[FaceValues.QUEEN] = 10;
mappingValues[FaceValues.JACK] = 10;
mappingValues[FaceValues.TEN] = 10;
mappingValues[FaceValues.NINE] = 9;
mappingValues[FaceValues.EIGHT] = 8;
mappingValues[FaceValues.SEVEN] = 7;
mappingValues[FaceValues.SIX] = 6;
mappingValues[FaceValues.FIVE] = 5;
mappingValues[FaceValues.FOUR] = 4;
mappingValues[FaceValues.THREE] = 3;
mappingValues[FaceValues.TWO] = 2;

export function getCardValues(playingCard) {
    let faceV = playingCard.faceValue;
    return mappingValues[faceV];
}