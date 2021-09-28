import Button from 'components/UI/Button';
import Container, { Tilt } from 'components/UI/Container';
import View from 'components/UI/View';
import React from 'react';
import * as S from './styles';
import bg from './bg.jpg';
import bg2x from './bg@2x.jpg';

const CreativeEconomy = () => {
  return (
    <View paddingV={100} style={{
      background: "url('/images/Octa icons-02 2.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
    }}>
      <Container>
        <S.Title>This is the new <br/> creative economy</S.Title>
        <S.Description>
        We’re bringing digital creators, crypto <br/>natives, and collectors together to move culture forward.
        </S.Description>
        <View row centerH>
          <Button size="sm" theme="gradient">
            <span style={{color:"#fff"}}>Explore Bids</span>
          </Button>
        </View>
      </Container>
    </View>
  );
};

export default CreativeEconomy;
