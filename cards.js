function Card(suit, rank){
	this.suit = suit
	this.rank = rank
	this.name = `${rank} of ${suit}`
}

function Deck(){
	var deck = []

	var suits = ["hearts", "clubs", "diamonds", "spades"]

	for(var rank = 1; rank <= 13; rank++){
		for(var suit = 0; suit < suits.length; suit++){
			deck.push(new Card(suits[suit], rank))
		}
	}

	this.deal = function(){
		if(deck){
			return deck.pop()
		}
	}

	this.shuffle = function(){
		for(var i = 0; i < deck.length; i++){
			var rand_index = Math.floor(Math.random() * deck.length)
			var temp = deck[i]
			deck[i] = deck[rand_index]
			deck[rand_index] = temp
		}
	}

	this.shuffle()
}

var my_deck = new Deck()
console.log(my_deck)

var my_card = my_deck.deal()
console.log(my_card.name)

