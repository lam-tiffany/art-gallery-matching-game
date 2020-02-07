// Cards
// - Creates a Card Class
// - Creates 12 Cards based on the 
// Card Class

// Card Class
// - path
// - alt property
// - number property (to match up the cards)
class Card {
    constructor(path, alt, number){
        this.path = path;
        this.alt = alt;
        this.number = number;
    }
}

// Create an array of cards
const cards = [];

// Create 12 cards using the "Card" class
// Eloquence
cards[0] = new Card('images/eloquence.jpg', 'Eloquence', 1);
cards[1] = new Card('images/eloquence.jpg', 'Eloquence', 1);
// Enchanted Blossoms
cards[2] = new Card('images/enchanted-blossoms.jpg', 'Enchanted Blossoms', 2);
cards[3] = new Card('images/enchanted-blossoms.jpg', 'Enchanted Blossoms', 2);
// Fire
cards[4] = new Card('images/fire.jpg', 'Fire', 3);
cards[5] = new Card('images/fire.jpg', 'Fire', 3);
// Infinite
cards[6] = new Card('images/Infinite.jpg', 'Infinite', 4);
cards[7] = new Card('images/Infinite.jpg', 'Infinite', 4);
// Mother Earth
cards[8] = new Card('images/mother-earth.jpg', 'Mother Earth', 5);
cards[9] = new Card('images/mother-earth.jpg', 'Mother Earth', 5);
// Sapphire Dream
cards[10] = new Card('images/sapphire-dream.jpg', 'Sapphire Dream', 6);
cards[11] = new Card('images/sapphire-dream.jpg', 'Sapphire Dream', 6);
// Spiritual
cards[12] = new Card('images/spiritual.jpg', 'Spiritual', 7);
cards[13] = new Card('images/spiritual.jpg', 'Spiritual', 7);
// Warm Seas
cards[14] = new Card('images/warm-seas.jpg', 'Warm Seas', 8);
cards[15] = new Card('images/warm-seas.jpg', 'Warm Seas', 8);
// Year of Clean Water
cards[16] = new Card('images/year-of-clean-water.jpg', 'Year of Clean Water', 9);
cards[17] = new Card('images/year-of-clean-water.jpg', 'Year of Clean Water', 9);

