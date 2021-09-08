import React from 'react';
import * as S from './styles';
import Button from 'components/UI/Button';
import bg from './bg.jpg';
import bg2x from './bg@2x.jpg';

const BecomeCreator = () => {
  return (
    <S.BecomeCard style={{  
  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <S.Subttl>Meet our Creators</S.Subttl>
      <S.Title>
        Become a Part <br />
        of Something Great
      </S.Title>
      <Button theme="secondary">View all creators</Button>
    </S.BecomeCard>
  );
};

export default BecomeCreator;
