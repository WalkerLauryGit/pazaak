

let total = 0;
function loadHand(){

  document.getElementById('start').remove();

  const hand = [-1, 3, 4, 2];

  let handOfCards = document.getElementById('hand');
  console.log(handOfCards);
 
  for(let i = 0; i<hand.length; i++){
    let div = document.createElement('div');
    div.classList.add('shadow');
    div.classList.add('zoom');
    div.setAttribute('id', i);
    div.setAttribute('value', hand[i])
    div.id = i;
    div.setAttribute('onclick', 'playCard(this.id)')
    let content = document.createTextNode(hand[i]);
    div.appendChild(content);

    handOfCards.appendChild(div);
  }
}

function playCard(cardId){

  let board = document.getElementById('player-one');
  card = document.getElementById(cardId);
  console.log(card);
  let value = card.getAttribute('value');

  let div = document.createElement('div');
  div.classList.add('board-slot');
  // div.setAttribute('id', cardId);
  div.setAttribute('value', value);
  let content = document.createTextNode(value);
  div.appendChild(content);

  //Delete the original
  document.getElementById(cardId).remove();

  board.appendChild(div);

  //add score to total
  total = total + Number(value)
  console.log(total);

}