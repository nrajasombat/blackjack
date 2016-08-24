/**
 * Created by vnguyen on 8/23/16.
 */
import React, {PropTypes, Component} from 'react';
import {FaceValues, Suits} from 'playing-card-models';
import styles from './playingCard.scss'
export default class PlayingCard extends Component {
    render() {
        let {faceValue, suit} =this.props;
        return (
            <img
                alt={`${faceValue} of ${suit}`}
                src={getImageForCard(suit,faceValue)}
                className={styles.playingCard}
            />
        )
    }
}
PlayingCard.propTypes = {
    faceValue: PropTypes.oneOf(Object.keys(FaceValues)),
    suit: PropTypes.oneOf(Object.keys(Suits))
}


function getImageForCard(suit, faceValue) {
    try {
        return require(`./images/${faceValue}_of_${suit}s.svg`.toLowerCase())
    } catch (e) {
        console.log('failed to find image', suit, faceValue, e);
    }
}