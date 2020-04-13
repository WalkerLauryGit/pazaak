
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
    
    let content = document.createTextNode(hand[i]);
    div.appendChild(content);

    handOfCards.appendChild(div);
  }


}