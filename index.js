// Code your solutions in this
const friends = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(nameOfArray, event) {
  let array = []
  for (let i = 0; i < nameOfArray.length ; i++) {
    array.push(console.log(`Thank you, ${nameOfArray[i]}, for the wonderful ${event} gift!`));
  }

  return nameOfArray;
}


writeCards(friends);
