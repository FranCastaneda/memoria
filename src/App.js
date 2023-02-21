
import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board/Board';


const cardsList = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9'];


const App = ()=>{

  const [shuffledCards, setShuffledCards] =  useState([])

  const [selectedCard, setSelectedCard] = useState(null);
  const [animating, setAnimating] = useState(true);
  const [mixCard, setMixCard] = useState(false);
  const [gameStart, setGameStart] = useState(false);

  useEffect(()=>{
    setCards();
  },[])

  const setCards = ()=>{
    const cards = shuffledArray([...cardsList, ...cardsList]).map((card, i) => ({ index: i, img: card, flipped: false }));
    setShuffledCards(cards);
  }

  const shuffledArray = (cardsList)=>{
    return cardsList.sort(function () { return Math.random() - 0.5 });
  }

  const handleCardClick = (card) =>{
    const flippedCard = {...card, flipped: true};
    let shuffledCardsCopy = [...shuffledCards];

    shuffledCardsCopy.splice(card.index, 1, flippedCard);
    setShuffledCards(shuffledCardsCopy);

    if(selectedCard === null){
      setSelectedCard(card);
    } else if(selectedCard.img === card.img){
      setSelectedCard(null);
    }else{
      setAnimating(true);
      setTimeout(() => {
        shuffledCardsCopy.splice(card.index, 1, card);
        shuffledCardsCopy.splice(selectedCard.index, 1, selectedCard);
        setShuffledCards(shuffledCardsCopy);
        setSelectedCard(null);
        setAnimating(null);
      }, 1000);
    }
  }

  const startGame= ()=>{
    setCards();
    setMixCard(true);
    setGameStart(true);
    setTimeout(() => {
      setAnimating(false);
      setMixCard(false);
    }, 1000);
  }

  return(
    <>
      <h1>Memoria</h1>
      <button onClick={startGame} className='btn-start'>{(gameStart) ? 'Reiniciar Juego' : 'Iniciar Juego'}</button>
      <Board mix={mixCard} cards={shuffledCards} animating={animating} handleCardClick={handleCardClick}></Board>
    </>
  )
}

export default App;
