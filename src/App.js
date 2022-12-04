
import { useEffect, useState } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard/index';
import Round from './components/Round/index';
import Button from './components/Button/index';


const App = ()=>{
  const [buttonThatPlayerHasClick, setButtonThatPlayerHasClick] = useState(undefined);
  const [buttonThatComputerHasClick, setButtonThatComputerHasClick] = useState(undefined);
  const [playerHand, setPlayerHand] = useState('');
  const [computerHand, setComputerHand] = useState('');
  const [pointsOfPlayer, setPointsOfPlayer] = useState(0);
  const [pointsOfMachine, setPointsOfMachine] = useState(0);


  const whatButtonHasPlayerClick = (hand)=>{
    if(hand === 0){
      setPlayerHand('Pedra');
    } else if(hand === 1){
      setPlayerHand('Papel');
    } else if(hand === 2){
      setPlayerHand('Tesoura');
    }
    return hand;
  }


  const whatButtonHasComputerClick = ()=>{
    const hand = Math.floor(Math.random()*(3));
    
    if(hand === 0){
      setComputerHand('Pedra');
    } else if(hand === 1){
      setComputerHand('Papel');
    } else if(hand === 2){
      setComputerHand('Tesoura');
    }
    return hand;
  }


/* TESTE DE VITORIA */
  const contest = (player, computer)=>{
    if(player === undefined) {
      setPlayerHand('');
      setComputerHand('');
      return
    };

    if(player === computer){
      return;
    } else if((player - computer === -2) || (player - computer === 1)){
      setPointsOfPlayer(p => p + 1);
    } else{
      setPointsOfMachine(p => p + 1);
    }
  }


  const eventTrigger = (hand)=>{
    contest(whatButtonHasPlayerClick(hand), whatButtonHasComputerClick());
  }


  useEffect((hand)=>{
    eventTrigger(hand);
  },[]);
  

  useEffect(()=>{
  }, [playerHand, pointsOfPlayer, pointsOfPlayer, pointsOfMachine])

  return(
    <div className="App">
      <Scoreboard
        pointsOfPlayer = {pointsOfPlayer}
        pointsOfMachine = {pointsOfMachine}
      />
      <Round
        playerHand = {playerHand}
        computerHand = {computerHand}
      />
      
      <Button
        clickEvent = {()=> eventTrigger(0)}
        valorReferencia={0}
        nomeDoBotao = 'Pedra' 
      />
      <Button
        clickEvent = {()=>eventTrigger(1)}
        valorReferencia={1}
        nomeDoBotao = 'Papel'
      />
      <Button
        clickEvent = {()=>eventTrigger(2)}
        valorReferencia={2}
        nomeDoBotao = 'Tesoura'
      />
    </div>
  );
}

export default App;
