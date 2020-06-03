
function writeCards(nameOfArray, event) {
  let array = []
  for (let i = 0; i < nameOfArray.length ; i++) {
    array.push(console.log(`Thank you, ${nameOfArray[i]}, for the wonderful ${event} gift!`));
  }

  return nameOfArray;
}
function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}
