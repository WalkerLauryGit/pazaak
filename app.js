
function loadHand(){

  document.getElementById('start').remove();

  const hand = [-1, 3, 4, 2];

  let handOfCards = document.getElementById('hand');
  console.log(handOfCards);
  // hand.forEach(element => {
  //  let div = document.createElement("div");
  // //  div.classList.add('shadow');
  //  let content = document.createTextNode(element);
  //  div.appendChild(content); 
   
  //  handOfCards.appendChild(div);
  //  console.log(handOfCards);
  // });

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
  
  

  //1. get the id in card.id -X-
  //2. grab the inner text of card with the id -X-
  //3. delete the original card from the hand
  //4. create a new card
  //5. add new card to the board
  //6. update the total points

}