import './SingleCard.css'

export default function SingleCard({card, handleChoice, flipped}) {

const handleClick = () => {
  handleChoice(card)

}
    return (
        <div className="card">
        <div className= {flipped ? "flipped" : ""}>
          <img className = "front" src = {card.src} alt="card front" />
          <img classeName = "back" src = "/imagens/carta.jpg" onClick={handleClick} alt= "card back" />
        </div>
      </div>
    )

    
}
