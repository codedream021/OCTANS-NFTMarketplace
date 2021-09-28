import React from 'react';
import * as S from './styles';
import View from 'components/UI/View';
import Avatar from 'components/Avatar';
import BidCountdown from 'components/BidCountdown';
import Button from 'components/UI/Button';
import { Asset } from 'types/asset';
import { Link } from 'react-router-dom';
import { useStore } from 'store';
import { useWeb3React } from '@web3-react/core';
import { Grid } from '@material-ui/core';
import nft from './assets/nft_1.png';

const FeaturedVideo = ({ asset }: { asset: Asset }) => {
  const { account } = useWeb3React();
  const { openModal } = useStore('modalsStore');
  if (!asset) return null;
  const { id, name, owner } = asset;
  const handlePlaceBid = () => {
    if (!account) {
      openModal('connectWallet');
      return;
    }
    openModal('placeBid', { asset });
  };
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <S.Video>
          <img src={nft} alt="NFT" />
        </S.Video>
      </Grid>

      <Grid item xs={12} md={6}>
        <S.Content>
          <View row centerV marginB={46} className="content__border">
            <Avatar
              src={'/images/hcphotos-Headshots-1 1.png'}
              size="sm"
              name={owner.address}
            />
            <S.Nickname>@{owner.user.username}</S.Nickname>
          </View>
          <S.Title>{name}</S.Title>
          <S.Bid>
            <Grid container>
              <div>
                <S.BidLabel>Current Bid</S.BidLabel>
                <S.BidValue>0.1666 OCTA</S.BidValue>
                <S.BidPrice>$568.75</S.BidPrice>
              </div>
              <S.DivCountdown>
                <S.BidLabel>Auction ending in</S.BidLabel>
                <BidCountdown />
              </S.DivCountdown>
            </Grid>
            <Grid container style={{ marginTop: '20px' }} spacing={2} alignItems="center">
              <Grid item xs={6} lg={6}>
              <S.PlaceBitButton onClick={handlePlaceBid}>
                Place a Bid
              </S.PlaceBitButton>
              </Grid>
              <Grid item xs={6} lg={6}>
              <Link to={`/videos/${id}`}>
                <S.ViewArtWorkButton>View Artwork</S.ViewArtWorkButton>
              </Link>
              </Grid>
             
            </Grid>
          </S.Bid>
        </S.Content>
      </Grid>
    </Grid>
  );
};

export default FeaturedVideo;
