import PattysDiner from '../../assets/PattysDiner.png';
import BunGrill from '../../assets/BunGrill.png';
import BurgerJoint from '../../assets/BurgerJoint.png';
import GrillHouse from '../../assets/GrillHouse.png';
import BurgerBarn from '../../assets/BurgerBarn.png';
import Burger1 from '../../assets/Burger1.png';
import Burger2 from '../../assets/Burger2.png';
import Burger3 from '../../assets/Burger3.png';
import Burger4 from '../../assets/Burger4.png';
import Restaurant from '../../models/restaurant';
import FeedPost from '../../models/feedPost';

export const nearbyRestaurants: Restaurant[] = [
  {
    name: "Patty's Diner",
    description:
      'Classic burgers, fries, and milkshakes in a cozy home-style setting. Must-try: Patty Melt on rye bread.',
    image: PattysDiner,
    score: { avgRating: '4.3' }
  },
  {
    name: "Bun N' Grill",
    description:
      'Juicy burgers, fresh toppings, and toasted buns. Classic cheeseburgers and unique options available.',
    image: BunGrill,
    score: { avgRating: '3.8' }
  },
  {
    name: 'The Burger Joint',
    description:
      'No-frills burger joint with character. Build your own burger with a variety of toppings and sauces.',
    image: BurgerJoint,
    score: { avgRating: '3.7' }
  },
  {
    name: 'Grill House Cafe',
    description:
      "Premium beef burgers cooked to order and loaded with fresh toppings. Don't miss the BBQ Bacon Burger.",
    image: GrillHouse,
    score: { avgRating: '4.8' }
  },
  {
    name: 'Burger Barn',
    description:
      'Rustic charm with locally sourced ingredients. Try the famous Barn Burger with bacon, cheese, and all the fixings.',
    image: BurgerBarn,
    score: { avgRating: '2.5' }
  }
];

export const initialFeed: FeedPost[] = [
  {
    userName: 'Isabella Patel',
    image: Burger1,
    review:
      'The classic burger was amazing! Perfectly cooked patty, fresh toppings, and a soft bun. Highly recommend.',
    burger: 'Classic burger',
    restaurant: {
      name: "Bun N' Grill",
      score: {
        taste: 5,
        texture: 5,
        visual: 3
      }
    }
  },
  {
    userName: 'Jonathan Hugh',
    image: Burger2,
    review:
      'The veggie burger was fantastic! Great texture, fresh toppings, and a delicious bun. Highly recommend for vegetarians.',
    burger: 'Veggie burger',
    restaurant: {
      name: "Patty's Diner",
      score: {
        taste: 4,
        texture: 3,
        visual: 4
      }
    }
  },
  {
    userName: 'Marcus Chen',
    image: Burger4,
    review:
      'The spicy burger was incredible! Perfectly cooked patty with a great kick, fresh toppings, and a spicy sauce. Must-try for spicy food fans.',
    burger: 'Bacon cheeseburger',
    restaurant: {
      name: 'Grill House Cafe',
      score: {
        taste: 5,
        texture: 4,
        visual: 2
      }
    }
  },
  {
    userName: 'Lily Thompson',
    image: Burger3,
    review:
      'The bacon cheeseburger was savory and salty. Crispy bacon, melted cheese, perfect patty, and a soft bun. Hit the spot!',
    burger: 'Spicy burger',
    restaurant: {
      name: 'The Burger Joint',
      score: {
        taste: 5,
        texture: 5,
        visual: 4
      }
    }
  }
];
