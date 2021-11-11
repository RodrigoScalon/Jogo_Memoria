import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './componentes/SingleCard';
import Footer from './componentes/footer';
import Global from './styles/global';
import Home from './pages/Home/Home';


const cardImages = [

  { "src": "/imagens/01.jpg", matched: false },
  { "src": "/imagens/02.jpg", matched: false },
  { "src": "/imagens/03.jpg", matched: false },
  { "src": "/imagens/04.jpg", matched: false },
  { "src": "/imagens/05.jpg", matched: false },
  { "src": "/imagens/06.jpg", matched: false },
  { "src": "/imagens/07.jpg", matched: false },
  { "src": "/imagens/08.jpg", matched: false },
  { "src": "/imagens/09.jpg", matched: false },
  { "src": "/imagens/10.jpg", matched: false },
  { "src": "/imagens/11.jpg", matched: false },
  { "src": "/imagens/12.jpg", matched: false },
  { "src": "/imagens/13.jpg", matched: false },
  { "src": "/imagens/14.jpg", matched: false },
  { "src": "/imagens/15.jpg", matched: false },
  { "src": "/imagens/16.jpg", matched: false },
  { "src": "/imagens/17.jpg", matched: false },
  { "src": "/imagens/18.jpg", matched: false },


];

//insere as cartas em um array combinação: false torna true se der match 




function App() {

  const [cards, setCards] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //duplicar as cartas e criar uma chave para cada uma + função embaralhar o array
  //cartas poderiam ficar todas lado a lado ou embaixo uma da outra

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)

  }

  //escolhas

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //comparar duas cartas selecionadas

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) { //se a carta escolhida bater com a proxima selecionada
              return { ...card, matched: true } //retorna true o array
            } else {
              return card
            }
          })
        })

        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000) //tempo 1s
      }

    }

  }, [choiceOne, choiceTwo])


  console.log(cards)


  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (

    <div className="App">

      <h1>Jogo da Memória - Heróis</h1>
      <button onClick={shuffleCards}> Jogar Novamente </button>

      <div className="card-grid">

        {cards.map(card => (

          <SingleCard key={card.id} card={card} handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched} /> //tres cenarios 

        ))}

        <div className="App">
          <Footer />
        </div>
      </div>
      <><Global />
        <Home boxData={cardImages} />
      </>

    </div>


  );
}

export default App;
