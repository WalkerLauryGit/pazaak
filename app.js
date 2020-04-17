/** THINGS TO WORK ON 
 * 
 *  1. If the computer is standing or the user is standing, 
 *     continue the other persons turn until it decides to stop 
 *     or busts over 20
 * 
 *  2. Turn some of this code into functions like the creating of the div card
 * 
 *  3. 
 * 
 * 
 * 
*/




let isUserTurn = true;

const player1 = {
  isStanding: false,
  score: 0
}

const player2 = {
  isStanding: false,
  score: 0
}

const sharedDeck = [];


function computerTurn(){
  dealSharedcard('player-two')

  endTurn();
}


//Create init method
function init(){
for(let j = 0; j < 4; j++){
  for(let i = 1; i<11; i++){
  sharedDeck.push(i);
    }
  }
}

init();

function checkWinner(){
  if(player1.score > 20){
    console.log('YOU LOSE BOOMER!');
  }
  if(player2.score <= 20){
    console.log('YOU WIN!')
  }
}


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  // console.log(a);
  return a;
}

function dealSharedcard(player){
  setTimeout(()=>{
  let board = document.getElementById(player);
  let value = sharedDeck.shift();
  //TURN THIS INTO A FUNCTION -------------
  let card = document.createElement('div');
  card.setAttribute('value', value);
  card.classList.add('board-slot');
  card.append(document.createTextNode(value));
  board.appendChild(card);
  //END TURN THIS INTO A FUNCTION ---------
  if(isUserTurn){
  updateScore(Number(value));
  }else{
  updateScore(Number(value));
  }
  }, 500);
}

function loadHand(){

  document.getElementById('start').remove();

  shuffle(sharedDeck);
  
  
  const hand = [-1, 3, 4, 2];
  const computerHand = [2, 3, 1, 5];
  let handOfCards = document.getElementById('hand1');
  let handOfCards2 = document.getElementById('hand2');
 
  //TODO: TURN INTO A FUNCTION
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
  
  for(let i = 0; i<computerHand.length; i++){
    
    let div = document.createElement('div');
    div.classList.add('shadow');
    div.classList.add('zoom');
    div.setAttribute('id', i+5);
    div.setAttribute('value', computerHand[i]);
    handOfCards2.appendChild(div);
// THIS IS WHERE I LEFT OFF
    
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
  if(isUserTurn){
    updateScore(Number(value));
  }else{
    updateScore(Number(value));
  }
}

function updateScore(value){
  
  if(isUserTurn){
    player1.score = player1.score + value;
    document.getElementById('userScore').innerHTML = `<span>${player1.score}</span>`;
    return player1.score;
  }
  else{
    player2.score = player2.score +  value;
    document.getElementById('computerScore').innerHTML = `<span>${player2.score}</span>`;
    endTurn();
    return player2.score;
  }
  
}

function endTurn(){
  if(isUserTurn){
    isUserTurn = false;
    document.getElementsByName('button').disabled = true;
    setTimeout(()=>{
    
    dealSharedcard('player-two');
    }, 1000);
  }else{
    isUserTurn = true;
    document.getElementsByName('button').disabled = false;
    setTimeout(()=>{
    
    dealSharedcard('player-one');
    }, 1000);
  }

}