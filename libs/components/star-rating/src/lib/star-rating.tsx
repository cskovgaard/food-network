import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';

import Typography from '@food/components/typography';

const StarRatingRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const StarRatingTitle = styled(Typography)`
  width: 50px;
`;

interface StarProps {
  $isSelected?: boolean;
  readOnly?: boolean;
}

const StarRatingStar = styled(FontAwesomeIcon)<StarProps>`
  height: 20px;
  color: ${({ theme }) => theme.palette.greyscale.grey20};
  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: ${({ theme }) => theme.palette.action.main};
    `}

  ${({ readOnly }) =>
    readOnly &&
    css`
      cursor: auto;
    `};
`;

interface Props {
  title?: string;
  stars?: number;
  readOnly?: boolean;
  onClick?: (selected: number) => void;
}

export const StarRating: React.FC<Props> = ({ title, stars, readOnly, onClick }) => {
  const [selectedStar, setSelectedStar] = React.useState<number>(0);

  React.useEffect(() => {
    if (stars) {
      setSelectedStar(stars);
    }
  }, [stars]);

  const handleOnClick = React.useCallback(
    (selected: number) => {
      if (!readOnly) {
        setSelectedStar(selected);
        onClick?.(selected);
      }
    },
    [onClick]
  );

  const ratingStars = Array.from({ length: 5 });

  return (
    <StarRatingRoot>
      <StarRatingTitle>{title}</StarRatingTitle>
      {ratingStars.map((_, index) => (
        <StarRatingStar
          icon={faStar}
          readOnly={readOnly}
          $isSelected={selectedStar >= index + 1}
          onClick={() => handleOnClick(index + 1)}
          key={index}
        />
      ))}
    </StarRatingRoot>
  );
};

export default StarRating;
