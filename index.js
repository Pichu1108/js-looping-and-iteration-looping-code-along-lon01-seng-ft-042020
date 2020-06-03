// Code your solutions in this
const friends = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(friends) {
  for (let i = 0; i < friends.length ; i++) {
    console.log(`Thank you, ${friends[i]}, for the wonderful surprise gift!`);
  }

  return friends;
}

writeCards();
