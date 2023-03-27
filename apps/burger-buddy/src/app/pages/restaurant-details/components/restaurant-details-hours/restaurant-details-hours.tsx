import React from 'react';
import styled from 'styled-components';

import Typography from '@food/components/typography';

const RestaurantDetailsHoursRoot = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const RestaurantDetailsHoursDay = styled(Typography)`
  width: 90px;
`;

interface Props {
  day: string;
  openHours?: string;
}

export const RestaurantDetailsHours: React.FC<Props> = ({ day, openHours }) => {
  return (
    <RestaurantDetailsHoursRoot>
      <RestaurantDetailsHoursDay>{day}</RestaurantDetailsHoursDay>
      <Typography>{openHours || ''}</Typography>
    </RestaurantDetailsHoursRoot>
  );
};

export default RestaurantDetailsHours;
