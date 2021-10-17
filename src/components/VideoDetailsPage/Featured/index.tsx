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
    <S.Head>
    <Grid container>
      <Grid item xs={12} md={6}>
        <S.Video>
          <img src={nft} alt="NFT" />
        </S.Video>
      </Grid>

      <Grid item xs={12} md={6}>
        <S.Content>
        
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
              <S.PlaceBitButton onClick={handlePlaceBid}>
                Place a Bid
              </S.PlaceBitButton>
           
             
            </Grid>
          </S.Bid>
        </S.Content>
      </Grid>
    </Grid>
    </S.Head>
  );
};

export default FeaturedVideo;
