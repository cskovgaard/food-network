import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Typography from '@food/components/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MediaCardTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const MediaCardTitleRowStars = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const MediaCardTitleRowIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.action.main};
`;

interface Props {
  image?: string;
  imageAlt?: string;
  title: string;
  text?: string;
  stars?: string;
  link: string;
  linkText: string;
}

export const MediaCard: React.FC<Props> = ({
  image,
  imageAlt,
  title,
  text,
  stars,
  link,
  linkText
}) => {
  const navigate = useNavigate();

  return (
    <Card>
      {image && <CardMedia sx={{ height: 240 }} image={image} title={imageAlt} />}
      <CardContent>
        <MediaCardTitleRow>
          <Typography variant={'h1'}>{title}</Typography>
          {stars && (
            <MediaCardTitleRowStars>
              <Typography variant={'text'}>{stars}</Typography>
              <MediaCardTitleRowIcon icon={faStar} />
            </MediaCardTitleRowStars>
          )}
        </MediaCardTitleRow>
        {text && <Typography variant={'text'}>{text}</Typography>}
      </CardContent>
      <CardActions>
        <Button size={'small'} onClick={() => navigate(link)}>
          {linkText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
