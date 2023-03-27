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
    shortDesc:
      'Classic burgers, fries, and milkshakes in a cozy home-style setting. Must-try: Patty Melt on rye bread.',
    longDesc:
      "Step into Patty's Diner for a delicious burger experience that feels like home. This cozy restaurant serves up classic burgers with all the fixings, alongside fries and milkshakes that are sure to satisfy. Don't miss their signature Patty Melt, a mouthwatering combination of grilled onions, melted cheese, and a juicy burger patty on rye bread.",
    image: PattysDiner,
    score: { avgRating: '4.3', avgTaste: '4.8', avgTexture: '4.5', avgVisual: '3.0' },
    openHours: {
      mon: '10.00 - 21.00',
      tue: '10.00 - 21.00',
      wed: '10.00 - 21.00',
      thu: '10.00 - 21.00',
      fri: '10.00 - 23.00',
      sat: '10.00 - 23.00',
      sun: '10.00 - 21.00'
    }
  },
  {
    name: "Bun N' Grill",
    shortDesc:
      'Juicy burgers, fresh toppings, and toasted buns. Classic cheeseburgers and unique options available.',
    longDesc:
      "At Bun N' Grill, you'll find burgers that are cooked to perfection and served with a smile. This local spot is known for its juicy patties, fresh toppings, and toasted buns that bring everything together. Whether you prefer a classic cheeseburger or something with a little more kick, Bun N' Grill has something for everyone.",
    image: BunGrill,
    score: { avgRating: '3.8', avgTaste: '4.4', avgTexture: '2.0', avgVisual: '4.4' },
    openHours: {
      mon: 'Closed',
      tue: '10.00 - 20.00',
      wed: '10.00 - 20.00',
      thu: '10.00 - 20.00',
      fri: '10.00 - 23.30',
      sat: '10.00 - 23.30',
      sun: '10.00 - 20.00'
    }
  },
  {
    name: 'The Burger Joint',
    shortDesc:
      'No-frills burger joint with character. Build your own burger with a variety of toppings and sauces.',
    longDesc:
      'Looking for a no-frills burger joint with plenty of character? Look no further than The Burger Joint. This cozy restaurant serves up juicy burgers and crispy fries that are perfect for a quick lunch or dinner. With a variety of toppings and sauces to choose from, you can create your own perfect burger every time.',
    image: BurgerJoint,
    score: { avgRating: '3.7', avgTaste: '3.3', avgTexture: '2.1', avgVisual: '4.9' },
    openHours: {
      mon: 'Closed',
      tue: '10.00 - 21.00',
      wed: '10.00 - 21.00',
      thu: '10.00 - 21.00',
      fri: '10.00 - 22.00',
      sat: '10.00 - 22.00',
      sun: '10.00 - 21.00'
    }
  },
  {
    name: 'Grill House Cafe',
    shortDesc:
      "Premium beef burgers cooked to order and loaded with fresh toppings. Don't miss the BBQ Bacon Burger.",
    longDesc:
      "When you're in the mood for a burger that's a cut above the rest, head to Grill House Cafe. This cozy restaurant serves up premium beef burgers that are cooked to order and loaded with fresh toppings. From the classic cheeseburger to specialty options like the BBQ Bacon Burger, every bite is a flavor explosion.",
    image: GrillHouse,
    score: { avgRating: '4.8', avgTaste: '4.9', avgTexture: '4.9', avgVisual: '3.8' },
    openHours: {
      mon: 'Closed',
      tue: '10.00 - 19.00',
      wed: '10.00 - 19.00',
      thu: '10.00 - 19.00',
      fri: '10.00 - 20.00',
      sat: '10.00 - 20.00',
      sun: '10.00 - 19.00'
    }
  },
  {
    name: 'Burger Barn',
    shortDesc:
      'Rustic charm with locally sourced ingredients. Try the famous Barn Burger with bacon, cheese, and all the fixings.',
    longDesc:
      "For a true taste of the countryside, visit Burger Barn. This cozy restaurant has a rustic charm that will make you feel right at home. Their burgers are made with locally sourced ingredients and cooked to perfection on the grill. Don't forget to try their famous Barn Burger, piled high with bacon, cheese, and all the fixings.",
    image: BurgerBarn,
    score: { avgRating: '2.5', avgTaste: '2.5', avgTexture: '4.0', avgVisual: '1.0' },
    openHours: {
      mon: 'Closed',
      tue: '15.00 - 21.00',
      wed: '15.00 - 21.00',
      thu: '15.00 - 21.00',
      fri: '15.00 - 23.30',
      sat: '12.00 - 23.30',
      sun: '12.00 - 21.00'
    }
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
