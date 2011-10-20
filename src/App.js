var hand = {
  score : function (cards) {
    var hand;
    if (pair(cards).length > 1) {
      hand = pair(cards);
      return 'Two pair of ' + niceCardName(hand[0]) + 's';
    } else {
      hand = cards.reduce(function (a, b) {
        return (highCardValue(a) > highCardValue(b) ? a : b);
        });
      return niceCardName(hand) + " high"; 
    }

  }
}

var highCardValue = function(key) {
  if (key >= '0' && key <= '9') {
    return Number(key);
  } else if (key === 'J' ){
    return 10;
  } else if (key === 'Q' ){
    return 11;
  } else if (key === 'K' ){
    return 12;
  } else if (key === 'A' ){
    return 13;
  }
}

var niceCardName = function(key) {
  switch (key) {
    case 'J':
      return 'Jack';

    case 'Q':
      return 'Queen';

    case 'K':
      return 'King';

    case 'A':
      return 'Ace';
  }

  return key;
}

var pair = function(cards) {
  var buckets = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  for(var i=0; i<5; i++) {
    buckets[highCardValue(cards[i])].push(highCardValue(cards[i]));
  }
  
  // the above loop puts the cards into arrays like so:
  // [1,1,2,2,4] -> [[1,1], [2,2], [], [4]...]
  return buckets.reduce( function(a, b) {
    return (a.length > b.length ? a : b);
  });
}
