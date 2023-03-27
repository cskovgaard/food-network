import React from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

import Typography from '@food/components/typography';
import StarRating from '@food/components/star-rating';

import FeedPost from '../../../../../../models/feedPost';

const CreatePostRatings = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

interface Props {
  isOpen: boolean;
  onClose: (newPost?: FeedPost) => void;
}

export const CreatePostDialog: React.FC<Props> = ({ isOpen, onClose }) => {
  const [restaurant, setRestaurant] = React.useState<string>('');
  const [burger, setBurger] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [tasteRating, setTasteRating] = React.useState<number>(0);
  const [textureRating, setTextureRating] = React.useState<number>(0);
  const [visualRating, setVisualRating] = React.useState<number>(0);
  const [imageName, setImageName] = React.useState<string>('');
  const [imageUrl, setImageUrl] = React.useState<string>('');

  const isDisabled = React.useMemo(() => {
    return !restaurant || !burger || !tasteRating || !textureRating || !visualRating;
  }, [restaurant, burger, description, tasteRating, textureRating, visualRating]);

  const handleOnImageChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files?.[0]) {
      const selectedImage = files[0];
      const imageUrl = URL.createObjectURL(selectedImage);

      setImageName(selectedImage.name);
      setImageUrl(imageUrl);
    }
  }, []);

  const handleSubmit = React.useCallback(() => {
    const newPost: FeedPost = {
      userName: 'user',
      review: description,
      burger: burger,
      image: imageUrl,
      restaurant: {
        name: restaurant,
        score: {
          taste: tasteRating,
          texture: textureRating,
          visual: visualRating
        }
      }
    };
    onClose(newPost);
  }, [onClose, restaurant, burger, description, tasteRating, textureRating, visualRating]);

  return (
    <Dialog open={isOpen} onClose={() => onClose()}>
      <DialogTitle>Create review</DialogTitle>
      <DialogContent sx={{ width: '500px', maxWidth: 'calc(100% - 50px)' }}>
        <FormControl sx={{ display: 'flex', gap: '20px', width: '100%' }} margin="dense">
          <InputLabel id={'restaurant'}>Restaurant</InputLabel>
          <Select
            labelId={'restaurant'}
            label={'Restaurant'}
            onChange={(e) => setRestaurant((e.target.value as string) ?? '')}
          >
            <MenuItem value={"Patty's Diner"}>Patty's Diner</MenuItem>
            <MenuItem value={"Bun N' Grill"}>Bun N' Grill</MenuItem>
            <MenuItem value={'The Burger Joint'}>The Burger Joint</MenuItem>
            <MenuItem value={'Grill House Cafe'}>Grill House Cafe</MenuItem>
            <MenuItem value={'Burger Barn'}>Burger Barn</MenuItem>
          </Select>
          <TextField
            variant="outlined"
            label={'Burger for review'}
            onChange={(e) => setBurger(e.target.value)}
          />
          <TextField
            variant="outlined"
            label={'Description'}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant={'contained'} component={'label'}>
            {imageName ? `Image: ${imageName}` : 'Upload Image'}
            <input type="file" accept="image/*" hidden onChange={handleOnImageChange} />
          </Button>
          <CreatePostRatings variant={'h2'}>Ratings</CreatePostRatings>
          <StarRating title={'Taste'} onClick={(rate) => setTasteRating(rate)} />
          <StarRating title={'Texture'} onClick={(rate) => setTextureRating(rate)} />
          <StarRating title={'Visual'} onClick={(rate) => setVisualRating(rate)} />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>Cancel</Button>
        <Button disabled={isDisabled} onClick={handleSubmit} variant={'contained'}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePostDialog;
