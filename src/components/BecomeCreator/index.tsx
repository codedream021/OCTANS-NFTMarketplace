import Button from 'components/UI/Button';
import Container, { Tilt } from 'components/UI/Container';
import View from 'components/UI/View';
import React from 'react';
import * as S from './styles';
import bg from './bg.jpg';
import bg2x from './bg@2x.jpg';
const options = {
  scale: 1.2,
  speed: 1000,
  max: 30
};
const BecomeCreator = () => {
  return (
    <View paddingV={100}>
      <Tilt options={options}>
      <Container>
        <S.Title>Welcome to the future of OCTANS economy.</S.Title>
        <S.Description>
          We’re bringin digital NFT creators, crypto natives, and collectors
          together to move culture forward.
        </S.Description>
        <View row centerH>
          <Button size="md" theme="gradient">
            <span style={{color:"#fff"}}>Become a creator</span>
          </Button>
        </View>
      </Container>
      </Tilt>
      <S.Bg>
        <img src={bg} srcSet={`${bg2x} 2x`} alt="" />
      </S.Bg>
    </View>
  );
};

export default BecomeCreator;
