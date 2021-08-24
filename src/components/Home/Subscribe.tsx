import React from 'react';
import * as S from './styles';
import Container from '../UI/Container';

const Subscribe = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.SubscribeTitle>Never miss a news from Octan 🔥</S.SubscribeTitle>
        <S.SubscribeDesc>
          Subscribe to our list and be the first to know
          about upcoming NFT news.
        </S.SubscribeDesc>
      </Container>
    </S.Wrapper>
  );
};

export default Subscribe;
