import React from 'react';
import styled from 'styled-components';

import Typography from '@food/components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RestaurantDetailsRatingRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const RestaurantDetailsRatingText = styled(Typography)`
  width: 70px;
`;

const RestaurantDetailsRatingIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.action.main};
`;

interface Props {
  title?: string;
  score?: string;
}

export const RestaurantDetailsRating: React.FC<Props> = ({ title, score }) => {
  return (
    <RestaurantDetailsRatingRoot>
      <RestaurantDetailsRatingText variant="h2">{title}</RestaurantDetailsRatingText>
      <RestaurantDetailsRatingIcon icon={faStar} size={'xl'} />
      <Typography>{score}</Typography>
    </RestaurantDetailsRatingRoot>
  );
};

export default RestaurantDetailsRating;
