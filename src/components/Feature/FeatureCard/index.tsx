import React from 'react';
import * as S from './styles';

const FeatureCard = () => {
  return (
    <S.Card isProfileCard={true}>
      <S.Thumb>
        <S.Poster src={'/images/feature.png'} alt={'feature'} />
      </S.Thumb>
      <div>
        <S.Title>{'Inside Worlds - No.1'}</S.Title>
        <S.ListPrice>
          - List price
          </S.ListPrice>
        <S.AuctionCardStatus>
          <S.CardFooterContainer>
            <div>
              <S.BidLabel>Artist</S.BidLabel>
              <S.BidValue>
                <img src={'/images/feature_owner.png'} alt={'owner'} />
                <span>Awaiting</span>
              </S.BidValue>
            </div>
            <div>
              <S.BidLabel>Owner</S.BidLabel>
              <S.BidValue>
                <img src={'/images/feature_owner.png'} alt={'owner'} />
                <span>Awaiting</span>
              </S.BidValue>
            </div>
          </S.CardFooterContainer>
        </S.AuctionCardStatus>
      </div>
    </S.Card>
  );
};

export default FeatureCard;
