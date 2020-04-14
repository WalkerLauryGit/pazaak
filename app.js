

let total = 0;


const isStanding = false;

/* Things to work on
1. Deal a card at the beginning of the game
2. Deal a card at the beginning of every turn while you are not in stand mode
3. Win the game if you hit 20
4. Lose the game if you go over 20
5. HOW DO I DO TURNS?????  






*/

// DOING OPPONENTS TURN
/*

*/



const sharedDeck = [];

//Create init method
for(let i = 1; i<11; i++){
  sharedDeck.push(i);
}

function checkWinner(){
  if(total > 20){
    console.log('YOU LOSE BOOMER!');
  }
  if(total <= 20){
    console.log('YOU WIN!')
  }
}


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function dealSharedcard(player){
  let board = document.getElementById(player);
  let value = sharedDeck.shift();
  let card = document.createElement('div');
  card.setAttribute('value', value);
  card.classList.add('board-slot');
  card.append(document.createTextNode(value));
  board.appendChild(card);
  total = updateScore(total, value);
}

function loadHand(){

  document.getElementById('start').remove();

  shuffle(sharedDeck);
  
  const hand = [-1, 3, 4, 2];

  let handOfCards = document.getElementById('hand');
  
 
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

  dealSharedcard('player-one');

}

function playCard(cardId){

  let board = document.getElementById('player-one');
  card = document.getElementById(cardId);
  // console.log(card);
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
  total = updateScore(total, Number(value));

  // console.log(total);

  if(!isStanding){
    dealSharedcard('player-one');
  }

  if(isStanding){
    /* CHECK IF PLAYER WON */
  }
}

function updateScore(current, value){
  
  let total = current + value;
  console.log(typeof total)
  //Something is making it not a numberS
  document.getElementById('score').innerText = total; 
  // console.log(typeof total);
  return total;
}