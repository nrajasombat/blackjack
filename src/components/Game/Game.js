/**
 * Created by vnguyen on 8/23/16.
 */
import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as gameActions from '../../actions/blackjack';

const mapStateToProps = (state) => (state.blackjack);
const mapDispatchToProps = (dispatch) => ({
    gameActions: bindActionCreators(gameActions, dispatch)
});
@connect(mapStateToProps, mapDispatchToProps)
export default class Game extends Component {

    render() {
        let {
            playerHand, dealerHand, gameActions, dealerCardValue, playerCardValue, gameOver, playerWins
        } = this.props;
        return (
            <div>
                {gameOver &&
                <h1>{playerWins ? 'Player' : 'Dealer'} wins</h1>}
                <h1>Dealer Hand:{dealerCardValue}</h1>
                <p>Dealer must hit if under 17</p>
                {dealerHand.map((c, i)=>(
                    <div key={`${c.faceValue}-${c.suit}`}>
                        {c.faceValue} of {c.suit}
                    </div>
                ))}
                <h1>Player Hand:{playerCardValue}</h1>
                {playerHand.map((c, i)=>(
                    <div key={`${c.faceValue}-${c.suit}`}>
                        {c.faceValue} of {c.suit}
                    </div>
                ))}
                <button type="button" disabled={gameOver} onClick={gameActions.playerHit}>Hit</button>
                <button type="button" disabled={gameOver} onClick={gameActions.playerStand}>Stand</button>
                <button type="button" onClick={gameActions.restartGame}>Restart Game</button>
            </div>
        );
    }
}
Game.propTypes = {}