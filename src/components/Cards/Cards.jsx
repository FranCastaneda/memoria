
import './Cards.css';
const cardsImages = require.context("../../assets/cards/", true);

const Cards = ({card, animating, handleCardClick, mix})=>{
 
  const flippedCard=()=>{
    if(!card.flipped && !animating){
      handleCardClick(card);
    }
  }

  return (
    <>
      <div className={`box-card ${(mix && card.index % 2 == 0) && 'mixCards'} ${(mix && card.index % 2 == 1) && 'mixCards2'}`} onClick={flippedCard}>
        <div className={ `card ${card.flipped && 'card-flipped'}` }>
          <div className='card-front'><img className='img-card' src={cardsImages(`./${card.img}.png`)} alt={`${card.img}`} /></div>
          <div className='card-back'><img className='img-card' src={cardsImages(`./cover.png`)} alt={`${card.img}`} /></div>
        </div>
      </div>
    </>
  )
}

export default Cards;