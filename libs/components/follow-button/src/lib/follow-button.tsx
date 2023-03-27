import React from 'react';
import styled from 'styled-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Typography from '@food/components/typography';

const FollowButtonRoot = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.palette.greyscale.grey50};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  gap: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;

export const FollowButton: React.FC = () => {
  return (
    <FollowButtonRoot>
      <FontAwesomeIcon icon={faPlus} />
      <Typography variant={'text'}>Follow</Typography>
    </FollowButtonRoot>
  );
};

export default FollowButton;
