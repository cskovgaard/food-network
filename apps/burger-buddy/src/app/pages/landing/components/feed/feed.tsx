import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faMapMarkerAlt, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import ProfileIcon from '@food/components/profile-icon';
import Typography from '@food/components/typography';
import StarRating from '@food/components/star-rating';
import useUser from '@food/hooks/use-user';

import FeedPost from '../../../../../models/feedPost';
import BurgerBuddyService from '../../../../../services/burger-buddy-service';

import CreatePostDialog from './create-post-dialog';

const FeedRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeedNewPost = styled.div`
  margin-top: ${({ theme }) => theme.spacing(7)};
  padding-bottom: ${({ theme }) => theme.spacing(7)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.greyscale.grey50};
`;

const FeedNewPostCreate = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.palette.greyscale.grey50};
  border-radius: 20px;
  flex-grow: 1;
  cursor: pointer;
`;

const FeedPosts = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(7)};
  gap: ${({ theme }) => theme.spacing(8)};
`;

const FeedPostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
  }
`;

const FeedPostTopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FeedPostUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`;

const FeedPostLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing('2px')};
  gap: ${({ theme }) => theme.spacing(1)};
`;

const FeedPostRatings = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing(4)} 0;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const FeedPostActions = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${({ theme }) => theme.palette.greyscale.grey50};
  margin-top: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.palette.primary.main};
`;

const FeedPostAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
  padding-bottom: 0;
  cursor: pointer;
`;

export const Feed: React.FC = () => {
  const [feed, setFeed] = React.useState<FeedPost[]>();
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);

  const { user } = useUser();

  React.useEffect(() => {
    setTimeout(() => {
      const response = BurgerBuddyService.getFeedPosts();
      setFeed(response);
    }, 100);
  }, [isDialogOpen]);

  const handleCloseDialog = React.useCallback((newPost?: FeedPost) => {
    setIsDialogOpen(false);

    if (newPost) {
      BurgerBuddyService.createNewPost(newPost, user?.isLoggedIn);
    }
  }, []);

  return (
    <FeedRoot>
      {user && user.isLoggedIn && (
        <FeedNewPost>
          <Card>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
              <ProfileIcon isLoggedIn />
              <FeedNewPostCreate onClick={() => setIsDialogOpen(true)}>
                <Typography>Create review</Typography>
              </FeedNewPostCreate>
            </CardContent>
          </Card>
        </FeedNewPost>
      )}
      <FeedPosts>
        {feed &&
          feed.map((post) => (
            <Card key={post.review}>
              <FeedPostWrapper>
                <CardMedia
                  image={post.image}
                  title={post.imageAlt}
                  sx={{ minHeight: '200px', minWidth: '30%' }}
                />
                <CardContent sx={{ width: '100%' }}>
                  <FeedPostTopRow>
                    <Typography variant={'h1'}>{post.burger}</Typography>
                    <FeedPostUser>
                      <Typography>{post.userName}</Typography>
                      <ProfileIcon size={'sm'} />
                    </FeedPostUser>
                  </FeedPostTopRow>
                  <FeedPostLocation>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <Typography>{post.restaurant.name}</Typography>
                  </FeedPostLocation>
                  <FeedPostRatings>
                    <StarRating title={'Taste'} stars={post.restaurant.score.taste} readOnly />
                    <StarRating title={'Texture'} stars={post.restaurant.score.texture} readOnly />
                    <StarRating title={'Visual'} stars={post.restaurant.score.visual} readOnly />
                  </FeedPostRatings>
                  <Typography>{post.review}</Typography>
                  {user && user.isLoggedIn && (
                    <FeedPostActions>
                      <FeedPostAction>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <Typography>{'Like'}</Typography>
                      </FeedPostAction>
                      <FeedPostAction>
                        <FontAwesomeIcon icon={faComment} />
                        <Typography>{'Comment'}</Typography>
                      </FeedPostAction>
                      <FeedPostAction>
                        <FontAwesomeIcon icon={faShare} />
                        <Typography>{'Share'}</Typography>
                      </FeedPostAction>
                    </FeedPostActions>
                  )}
                </CardContent>
              </FeedPostWrapper>
            </Card>
          ))}
      </FeedPosts>
      <CreatePostDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </FeedRoot>
  );
};

export default Feed;
