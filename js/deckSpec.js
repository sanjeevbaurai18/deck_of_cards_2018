describe('when creating a card', function () {
  var card = new Card(suits[0], ranks[0]);
  it('should be a Two of Spades', function() {
    expect(card.say()).toEqual("2 of Spades");
  });
  it('should equal to unicode card Two of Spades (🂢)', function() {
    expect(card.showUnicode()).toBe('🂢');
  });
});
describe('when creating a deck', function () {
  var deck = new Deck();
  deck.create();
  it('should return a 52 card deck', function() {
    expect(deck.deck.length).toBe(52);
  });
  it('should draw 10 cards from the deck', function() {
    var drawn = new Array();
    drawn = deck.draw(10);
    expect(drawn.length).toBe(10);
  });
  it('should have 42 cards remaining in the deck after drawing', function() {

    expect(deck.deck.length).toBe(42);
  });
});
describe('when sorting', function() {
  var deck = new Deck();
  deck.create();
  it('should sort the deck, with the first card being Two of Clubs', function () {
    deck.sort();
    expect(deck.get(0).say()).toEqual("2 of Clubs");
  });
  it('should sort the deck, with the last card being Ace of Diamonds', function () {
    deck.sort();
    expect(deck.get(deck.deck.length - 1).say()).toEqual("Ace of Diamonds");
  });
});
describe('when shuffling', function() {
  var deck = new Deck();
  deck.create();
  it('should sort the deck, with the first card NOT being Two of Clubs', function () {
    deck.shuffle();
    expect(deck.get(0).say()).not.toEqual("2 of Clubs");
  });
  it('should sort the deck, with the first card NOT being Ace of Clubs', function () {
    deck.shuffle();
    expect(deck.get(deck.deck.length - 1).say()).not.toEqual("Ace of Clubs");
  });
});
describe('when shuffling and sorting', function() {
  var deck = new Deck();
  deck.create();
  deck.shuffle();
  deck.sort();
  it('should shuffle the deck then sort it back, with the first card being Two of Clubs', function () {
    expect(deck.get(0).say()).toEqual("2 of Clubs");
  });
  it('should shuffle the deck then sort it back, with the last card being Ace of Diamonds', function () {
    expect(deck.get(deck.deck.length - 1).say()).toEqual("Ace of Diamonds");
  });
  console.log(deck);
});
