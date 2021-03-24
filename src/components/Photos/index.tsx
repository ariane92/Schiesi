import React from 'react';
import { View } from 'react-native';


import { Container, UserPhotoButton, UserPhoto } from './styles';

const Photos: React.FC = () => {
  return (
    <Container>
      <UserPhotoButton onPress={() => {console.log('foto')}}>
        <UserPhoto source={{uri: 'https://avatars2.githubusercontent.com/u/5742201?s=460&u=f88127f927b4c9c945e638cce65837e51634ec0f&v=4'}} />
      </UserPhotoButton>
    </Container>
  )
}

export default Photos;
