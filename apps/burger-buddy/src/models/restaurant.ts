import Score from './score';

export interface Restaurant {
  image?: string;
  name: string;
  shortDesc?: string;
  longDesc?: string;
  openHours?: {
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
  };
  score: Score;
}

export default Restaurant;
