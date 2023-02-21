
import Cards from '../Cards/Cards';
import './Board.css';


const Board = ({ cards, animating, handleCardClick, mix}) =>{
  return (
    <>
      <main className='board'>
        {cards.map((card, i)=>{
          return <Cards mix={mix} key={`${i}_${card.img}`} card={card} animating={animating} handleCardClick={handleCardClick}></Cards>
        })}
      </main>
    </>
  )
}

export default Board;