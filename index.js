// Code your solutions in this
const friends = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(nameOfArray, event) {
  for (let i = 0; i < nameOfArray.length ; i++) {
    console.log(`Thank you, ${nameOfArray[i]}, for the wonderful ${event} gift!`);
  }

  return nameOfArray;
}


writeCards(friends);
