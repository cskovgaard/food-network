import Restaurant from './restaurant';

export interface FeedPost {
  userName: string;
  image?: string;
  imageAlt?: string;
  review: string;
  burger: string;
  restaurant: Restaurant;
}

export default FeedPost;
