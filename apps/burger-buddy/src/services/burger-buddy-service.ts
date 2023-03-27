import Restaurant from '../models/restaurant';
import FeedPost from '../models/feedPost';
import { initialFeed, nearbyRestaurants } from './mocks/mocks';
import StorageService from './storage-service';

export const BurgerBuddyService = {
  getNearbyRestaurants: (): Restaurant[] => {
    return nearbyRestaurants;
  },

  getFeedPosts: (): FeedPost[] => {
    return StorageService.getSession('feed') as FeedPost[];
  },

  createNewPost: (newPost: FeedPost, isAuthenticated?: boolean) => {
    const newFeed = [...initialFeed];

    if (isAuthenticated) {
      newFeed.unshift(newPost);
    }

    StorageService.setSession('feed', newFeed);
  }
};

export default BurgerBuddyService;
