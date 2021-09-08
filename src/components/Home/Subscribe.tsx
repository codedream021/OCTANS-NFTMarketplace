import React from 'react';
import * as S from './styles';
import Container from '../UI/Container';

const Subscribe = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.SubscribeTitle>Want to receive the new and exclusive Collections? 🔥</S.SubscribeTitle>
        <S.SubscribeDesc>
          Subscribe to our newsletter and be the first to know
          about upcoming NFT exclusives and collections.
        </S.SubscribeDesc>
      </Container>
    </S.Wrapper>
  );
};

export default Subscribe;
