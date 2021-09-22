import React, { SyntheticEvent } from 'react';
import * as S from './styles';
import Avatar from '../Avatar';
import { useNavigate } from 'react-router-dom';
import { Asset } from 'types/asset';
import { Grid } from '@material-ui/core';
import BidCountdown from 'components/BidCountdown';

const AuctionCard = ({
  horizontal = false,
  asset,
}: {
  horizontal?: boolean;
  asset: Asset;
}) => {
  const navigate = useNavigate();
  const { name, owner } = asset;
  const { user, profileImgUrl, id: ownerId, address } = owner;
  const { username } = user;
  const handleOpenVideo = () => navigate(`/videos/${asset.id}`);
  const handleOpenProfile = (e: SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigate(`/creators/${ownerId}`);
  };
  return (
    <S.Card horizontal={horizontal} onClick={handleOpenVideo}>
      <S.Thumb>
        <S.Poster src={asset.thumbnailUrl} alt={name} />
      </S.Thumb>
      <div>
        <S.Title>{name}</S.Title>

        <S.Author onClick={handleOpenProfile}>
          <Avatar src={profileImgUrl} name={address} />
          <S.Name>@{username}</S.Name>
        </S.Author>
        <S.AuctionCardStatus>
          <Grid container>
            <div>
              <S.BidLabel>Current Bid</S.BidLabel>
              <S.BidValue>0.1666 ETH</S.BidValue>
            </div>
            <div>
              <S.BidLabel>Auction ends in</S.BidLabel>
              <BidCountdown isAuctionCard={true} />
            </div>
          </Grid>
        </S.AuctionCardStatus>
      </div>
    </S.Card>
  );
};

export default AuctionCard;
