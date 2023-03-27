import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';

import User from './assets/user.jpg';

const ProfileIconRoot = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: ${({ size }) => (size === 'sm' ? '24px' : '40px')};
  width: ${({ size }) => (size === 'sm' ? '24px' : '40px')};
  color: ${({ theme }) => theme.palette.greyscale.grey100};
  margin: 0 ${({ theme }) => theme.spacing(2)};

  ${({ isLoggedIn }) =>
    isLoggedIn
      ? css`
          background-image: url(${User});
          background-size: 100%;
          object-fit: contain;
        `
      : css`
          background-color: ${({ theme }) => theme.palette.greyscale.grey10};
        `}
`;

interface Props {
  isLoggedIn?: boolean;
  size?: 'sm' | 'md';
}

export const ProfileIcon: React.FC<Props> = ({ isLoggedIn, size = 'md' }) => {
  return (
    <ProfileIconRoot isLoggedIn={isLoggedIn} size={size}>
      {!isLoggedIn && <FontAwesomeIcon icon={faUser} size={size === 'sm' ? 'xs' : '1x'} />}
    </ProfileIconRoot>
  );
};

export default ProfileIcon;
