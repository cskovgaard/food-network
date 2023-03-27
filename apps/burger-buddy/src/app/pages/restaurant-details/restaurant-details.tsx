import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import styled, { useTheme } from 'styled-components';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams, useLocation } from 'react-router-dom';

import Typography from '@food/components/typography';

import Map from '../../../assets/Map.png';
import Restaurant from '../../../models/restaurant';
import { nearbyRestaurants } from 'apps/burger-buddy/src/services/mocks';
import RestaurantTeaser from '../../components/restaurant-teaser';
import RestaurantDetailsRating from './components/restaurant-details-rating';
import RestaurantDetailsHours from './components/restaurant-details-hours';

const RestaurantsDetailsRoot = styled.div`
  display: flex;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.greyscale.grey10};
`;

const RestaurantsDetailsContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.main};
  padding: 0 ${({ theme }) => theme.spacing(8)};
  margin-top: ${({ theme }) => theme.spacing(20)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  gap: ${({ theme }) => theme.spacing(12)};
`;

const RestaurantDetailsMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(7)};
`;

const RestaurantDetailsTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const RestaurantDetailsAvgStars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const RestaurantDetailsAvgStarsIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.action.main};
`;

const RestaurantDetailsDescription = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const RestaurantDetailsAverages = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

const RestaurantDetailsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

const RestaurantDetailsMap = styled.img`
  max-width: 100%;
`;

export const RestaurantDetails: React.FC = () => {
  const [restaurant, setRestaurant] = React.useState<Restaurant>();

  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  React.useEffect(() => {
    const name = searchParams.get('id');
    const activeRestaurant = nearbyRestaurants.find((x) => x.name === name);

    setRestaurant(activeRestaurant);
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <RestaurantsDetailsRoot>
      <RestaurantsDetailsContent>
        <MediaQuery minWidth={theme.breakpoints.mobile}>
          <RestaurantTeaser title={'Other restaurants near you'} />
        </MediaQuery>
        <RestaurantDetailsMain>
          {restaurant && (
            <Card>
              <CardMedia image={restaurant.image} sx={{ height: '300px', width: '100%' }} />
              <CardContent sx={{ width: '100%' }}>
                <RestaurantDetailsTitleRow>
                  <RestaurantDetailsAvgStars>
                    <Typography>{restaurant.score.avgRating}</Typography>
                    <RestaurantDetailsAvgStarsIcon icon={faStar} />
                  </RestaurantDetailsAvgStars>
                  <Typography variant="h1">{restaurant.name}</Typography>
                </RestaurantDetailsTitleRow>
                <RestaurantDetailsDescription>{restaurant.longDesc}</RestaurantDetailsDescription>
                <RestaurantDetailsAverages>
                  <Typography variant="h2">{'Average ratings from reviews'}</Typography>
                  <RestaurantDetailsRating title={'Taste'} score={restaurant.score.avgTaste} />
                  <RestaurantDetailsRating title={'Texture'} score={restaurant.score.avgTexture} />
                  <RestaurantDetailsRating title={'Visual'} score={restaurant.score.avgVisual} />
                </RestaurantDetailsAverages>
                <RestaurantDetailsSection>
                  <Typography variant="h2">{'Opening hours'}</Typography>
                  <RestaurantDetailsHours day={'Monday'} openHours={restaurant.openHours?.mon} />
                  <RestaurantDetailsHours day={'Tuesday'} openHours={restaurant.openHours?.tue} />
                  <RestaurantDetailsHours day={'Wednesday'} openHours={restaurant.openHours?.wed} />
                  <RestaurantDetailsHours day={'Thursday'} openHours={restaurant.openHours?.thu} />
                  <RestaurantDetailsHours day={'Friday'} openHours={restaurant.openHours?.fri} />
                  <RestaurantDetailsHours day={'Saturday'} openHours={restaurant.openHours?.sat} />
                  <RestaurantDetailsHours day={'Sunday'} openHours={restaurant.openHours?.sun} />
                </RestaurantDetailsSection>
                <RestaurantDetailsSection>
                  <Typography>Find them at their location during opening hours</Typography>
                  <RestaurantDetailsMap src={Map} />
                </RestaurantDetailsSection>
                <RestaurantDetailsSection>
                  <Typography>
                    To learn more you can visit their website{' '}
                    <a href="https://www.google.com" target="_blank">
                      here.
                    </a>
                  </Typography>
                </RestaurantDetailsSection>
              </CardContent>
            </Card>
          )}
        </RestaurantDetailsMain>
      </RestaurantsDetailsContent>
    </RestaurantsDetailsRoot>
  );
};

export default RestaurantDetails;
