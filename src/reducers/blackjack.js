/**
 * Created by vnguyen on 8/23/16.
 */
import * as actionTypes from '../constants/actionTypes';
import {Card, FaceValues, Deck} from 'playing-card-models';
import {getCardValues} from '../utils/playingCardValues';
const initialState = getInitialGameState();
var deck;
export default function game(state = initialState, action) {
    let {type} = action;
    switch (type) {
        case actionTypes.PLAYER_HIT:
            state = playerHit(state);
            //CHECK IF GAME IS OVER
            break;
        case actionTypes.PLAYER_STAND:
            state = playerStand(state);
            break;
        case actionTypes.RESET_GAME:
            state = getInitialGameState();
            break;
    }
    return state;
}

function getInitialGameState() {
    //Get a new deck, UI doesn't need to know about how cards are drawn
    deck = new Deck().shuffle().shuffle().shuffle();
    var playersHand = [
            deck.drawTopCard(), deck.drawTopCard()
        ],
        dealerHand = [
            deck.drawTopCard(), deck.drawTopCard()
        ];
    return {
        playerHand: playersHand,
        playerCardValue: calcHandValue(playersHand),
        dealerHand: dealerHand,
        dealerCardValue: calcHandValue(dealerHand),
        gameOver: false,
        playerWins: false
    }
}
function playerHit(state) {
    let newHand = [...state.playerHand, deck.drawTopCard()],
        newHandVal = calcHandValue(newHand);
    return {
        ...state,
        playerCardValue: newHandVal,
        playerHand: newHand,
        gameOver: newHandVal > 21,
        playerWins: false
    };
}
function playerStand(state) {
    let dealerHand = state.dealerHand;
    while (dealerWllHit(dealerHand)) {
        dealerHand = [...dealerHand, deck.drawTopCard()];
    }
    let gameOver = true,
        dealerCardValue = calcHandValue(dealerHand),
        playerWins = (dealerCardValue > 21) || (state.playerCardValue > dealerCardValue);

    return {
        ...state,
        gameOver,
        dealerHand,
        dealerCardValue,
        playerWins
    }

}
function dealerWllHit(hand) {
    return calcHandValue(hand) < 17;
}
function calcHandValue(hand) {
    let handScore = 0,
        acesInHand = hand.filter(c=>c.faceValue === FaceValues.ACE);
    hand
        .filter(c=>c.faceValue !== FaceValues.ACE)
        .forEach((c)=> {
            handScore += getCardValues(c);
        });
    //It is never possible to have more then 4 aces, we are only calculating max score, under 21
    //It is only ever possible to have 1 ace be worth 11, since 22 would be busted
    if (acesInHand.length > 0) {
        //All but one ace will be one, this will be negated if there is only one
        handScore += ( acesInHand.length - 1);
        if ((handScore + 11) <= 21) {
            handScore += 11;
        } else {
            handScore += 1;
        }

    }
    return handScore;
}
