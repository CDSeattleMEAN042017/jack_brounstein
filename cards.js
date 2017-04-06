class Card{
	constructor(suit, rank){
		this.suit = suit
		this.rank = rank
	}

	get name(){
		var rank_names = {
			1: "Ace",
			11: "Jack",
			12: "Queen",
			13: "King",
		}
		return `${rank_names[this.rank] ? rank_names[this.rank] : this.rank} of ${this.suit}`
	}
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


/*
Straight flus
Four of a kind
Full house
Flush
Straight
Three of a kind
Two pair
One pair
High card
*/

function rank_hand(cards){
	var suit_count = {}
	var rank_count = {}

	for(var i = 0; i < cards.length; i++){
		if(!suit_count[cards[i].suit]) { suit_count[cards[i].suit] = 0 }
		if(!rank_count[cards[i].rank]) { rank_count[cards[i].rank] = 0 }

		suit_count[cards[i].suit]++
		rank_count[cards[i].rank]++
	}

	console.log(suit_count)
	console.log(rank_count)
}

var hand = []

for(var i = 0; i < 5; i++){
	hand.push(my_deck.deal())
}

console.log(hand)
rank_hand(hand)
