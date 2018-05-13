
var app = angular.module('CardDeck', []);

app.controller('DeckController', function(){
  this.cards = deckOfCards;
  this.drawn = drawnCards;
});

function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

Card.prototype.say = function () {
  var s = "";
  s += this.rank.name + " of " + this.suit.name + "s";
  return s;
};

Card.prototype.showUnicode = function () {
  var codePt = this.suit.unicode * 0x10 + this.rank.unicode;
    // Fix to JavaScript unicode bug
    if (codePt > 0xFFFF) {
        codePt -= 0x10000;
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
    } else {
        return String.fromCharCode(codePt);
    }
};

Card.prototype.isRed = function () {
  if (this.suit.value == 2 || this.suit.value == 3) {
    return true;
  } else {
    return false;
  }
};
Card.prototype.flipCard=function(){
	if(!Card.card-back){
		console.log(3);
		return true;
	}else{
		console.log(32);
		false;
	}
};
function Deck() {
  this.deck = new Array();
}

Deck.prototype.create = function() {
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      this.deck.push(new Card(suits[i], ranks[j]));
    }
  }
};

Deck.prototype.get = function(index) {
  if (this.deck.length > 0 && index >= 0 && index < this.deck.length) {
    return this.deck[index];
  } else {
    return null;
  }
};

// Implementation of Fisher-Yates Shuffle algorithm
Deck.prototype.shuffle = function() {
  var size = this.deck.length - 1;
  for (var i = size; i > 0; i--) {
    var rand = Math.floor((Math.random() * i));
    var temp = this.deck[i];
    this.deck[i] = this.deck[rand];
    this.deck[rand] = temp;
  }
};

Deck.prototype.draw = function(number) {
  var retVal = null;
  if (typeof this.deck != "undefined" && this.deck != null
  && this.deck.length != null && this.deck.length > 0 && this.deck.length >= number) {
    var drawn = new Array();
    var i = this.deck.length;
    while (number--) {
      drawn.push(this.deck.pop());
    }
    retVal = drawn;
  }
  return retVal;
};

Deck.prototype.put = function(cards) {
  console.log(cards);
  if (typeof cards != "undefined" && cards != null
  && cards.length != null && cards.length > 0) {
    for (var i = 0; i < cards.length; i++) {
      this.deck.push(cards[i]);
    }
  }
};

Deck.prototype.sort = function() {
  this.deck.sort(function (a, b) {
    if (a.suit.value < b.suit.value) {
      return -1;
    } else if (a.suit.value > b.suit.value) {
      return 1;
    } else {
      if (a.rank.value < b.rank.value) {
        return -1;
      } else if (a.rank.value > b.rank.value) {
        return 1;
      } else {
        return 0;
      }
    }
  });
};

var deckOfCards = new Deck();
deckOfCards.create();
var drawnCards = new Deck();
