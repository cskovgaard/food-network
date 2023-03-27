import Score from './score';

export interface Restaurant {
  image?: string;
  name: string;
  description?: string;
  score: Score;
}

export default Restaurant;
