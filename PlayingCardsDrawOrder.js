function draw (deck){

	const drawnCards = [];
  
  while (deck.length > 0){
    drawnCards.push(deck[0]);
    deck.shift();
    deck.push(deck[0]);
    deck.shift();
  }
  
	return drawnCards;
}