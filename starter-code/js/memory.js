class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    /* Need to be fixed    
    let m = this.cards.length, t, i;
    
      // While there remain elements to shuffle…
      while (this.cards.length !== 0) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * this.cards.length --);
    
        // And swap it with the current element.
        t = this.cards[this.cards.length];
        this.cards[this.cards.length] = this.cards[i];
        this.cards[i] = t;
      }
    
      return
    }*/

    let shuffleArray = [];

    for (let i = this.cards.length; i > 0; i--) {
      const randomNumberPosition = parseInt(Math.random() * 1);
      const randomNumber = this.cards.splice(randomNumberPosition, 1);
      shuffleArray.push(randomNumber);
    }
  }

  checkIfPair(card1, card2) {
    // ...
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    // ...
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
