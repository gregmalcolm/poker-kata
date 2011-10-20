describe("Poker Kata", function() {
  describe("hand analysis" , function() {
    [
      ['J', 'Jack'], 
      ['Q', 'Queen'],
      ['K', 'King'],
      ['A', 'Ace'],
      ['3', '8'],
      ['9', '9']
    ].forEach( function(pair) {
      it("has a high jack given a hand of 2,4,J,7,9", function () {
        expect(window.hand.score(['2', '4', pair[0], '7', '8'])).toBe(pair[1] + ' high');
      });
    });

    it("has a high ace given a hand of 9,J,A,K,Q", function () {
      expect(window.hand.score(['9', 'J', 'A', 'K', 'Q'])).toBe('Ace high');
    });

    it("has a two pair of twos given a hand of 2,2,J,A,Q", function () {
      expect(window.hand.score(['2', '2', 'J', 'A', 'Q'])).toBe('Two pair of 2s');
    });
  });
});
