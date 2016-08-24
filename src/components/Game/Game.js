/**
 * Created by vnguyen on 8/23/16.
 */
import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as gameActions from '../../actions/blackjack';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import {Button, IconButton} from 'react-toolbox/lib/button';
import PlayingCard from '../PlayingCard';
import styles from './game.scss';
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
                <Navigation className={styles.titlebar}>
                    <Link active href="https://github.com/vujita/blackjack" label={"View Code for game"}/>
                    <Link active href="https://github.com/vujita/playing-card-models"
                          label={"View code for playing card models"}/>
                </Navigation>
                <div>
                    <Button type="button" disabled={gameOver} onClick={gameActions.playerHit}>Hit</Button>
                    <Button type="button" disabled={gameOver} onClick={gameActions.playerStand}>Stand</Button>
                    <Button type="button" onClick={gameActions.restartGame}>Restart Game</Button>
                </div>
                {gameOver &&
                <h1>{playerWins ? 'Player' : 'Dealer'} wins</h1>}
                <h1>Dealer Hand:{dealerCardValue}</h1>
                <p>Dealer must hit if under 17</p>
                {dealerHand.map((c, i)=>(
                    <PlayingCard key={`${c.faceValue}-${c.suit}`} suit={c.suit} faceValue={c.faceValue}/>
                ))}
                <h1>Player Hand:{playerCardValue}</h1>
                {playerHand.map((c, i)=>(
                    <PlayingCard key={`${c.faceValue}-${c.suit}`} suit={c.suit} faceValue={c.faceValue}/>
                ))}
            </div>
        );
    }
}
Game.propTypes = {}