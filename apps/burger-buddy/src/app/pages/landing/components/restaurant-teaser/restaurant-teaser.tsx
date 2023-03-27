import React from 'react';
import styled from 'styled-components';

import Typography from '@food/components/typography';
import MediaCard from '@food/components/media-card';

import { BurgerBuddyService } from '../../../../../services/burger-buddy-service';
import Restaurant from '../../../../../models/restaurant';

const RestaurantTeaserRoot = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 30%;
    min-width: 200px;
    max-width: 300px;
  }
`;

const RestaurantTeaserTitle = styled(Typography)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const RestaurantTeaserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const RestaurantTeaser: React.FC = () => {
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>();

  React.useEffect(() => {
    setRestaurants(BurgerBuddyService.getNearbyRestaurants());
  }, []);

  return (
    <RestaurantTeaserRoot>
      <RestaurantTeaserTitle variant={'h2'}>Restaurants in your area</RestaurantTeaserTitle>
      <RestaurantTeaserList>
        {restaurants &&
          restaurants.map((restaurant) => (
            <MediaCard
              image={restaurant.image}
              title={restaurant.name}
              text={restaurant.description}
              stars={restaurant.score.avgRating}
              link={'/restaurant'}
              linkText={'Read more'}
              key={restaurant.name}
            />
          ))}
      </RestaurantTeaserList>
    </RestaurantTeaserRoot>
  );
};

export default RestaurantTeaser;
