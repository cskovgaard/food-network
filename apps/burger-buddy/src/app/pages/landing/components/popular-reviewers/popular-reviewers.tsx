import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@food/components/typography';
import FollowButton from '@food/components/follow-button';
import ProfileIcon from '@food/components/profile-icon';
import useUser from '@food/hooks/use-user';

const PopularReviewersRoot = styled.div`
  display: none;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

const PopularReviewersTitle = styled(Typography)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const PopularReviewersSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const PopularReviewers: React.FC = () => {
  const mockReviewers = ['Lily Thompson', 'Marcus Chen', 'Isabella Patel'];

  const { user } = useUser();

  return (
    <PopularReviewersRoot>
      <PopularReviewersTitle variant={'h2'}>Popular reviewers</PopularReviewersTitle>
      <Card>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {mockReviewers.map((reviewer) => (
            <PopularReviewersSection key={reviewer}>
              <ProfileIcon />
              <Typography>{reviewer}</Typography>
              {user && user.isLoggedIn && <FollowButton />}
            </PopularReviewersSection>
          ))}
        </CardContent>
      </Card>
    </PopularReviewersRoot>
  );
};

export default PopularReviewers;
