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
              src={
                'https://bafkreiecuo4clslx2zzd2mntfp7e5uppenaff4ksw54ss5kow6z4ujsfvq.ipfs.dweb.link'
              }
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
                <S.BidValue>0.1666 ETH</S.BidValue>
                <S.BidPrice>$568.75</S.BidPrice>
              </div>
              <S.DivCountdown>
                <S.BidLabel>Auction ending in</S.BidLabel>
                <BidCountdown />
              </S.DivCountdown>
            </Grid>
            <Grid
              container
              justify="space-between"
              style={{ marginTop: '20px' }}
              alignItems="center"
            >
              <Button
                size="sm"
                onClick={handlePlaceBid}
                style={{
                  width: '334px',
                  height: '56px',
                  background:
                    'linear-gradient(90deg, #3CBAD9 0%, #4FCFEF 100%)',
                  borderRadius: '50px',
                  fontSize: '18px',
                }}
              >
                Place a Bid
              </Button>
              <Link to={`/videos/${id}`}>
                <Button
                  size="sm"
                  style={{
                    width: '206px',
                    height: '56px',
                    background: '#FFFFFF',
                    border: '2px solid #3CBAD9',
                    borderRadius: '50px',
                    color: '#3CBAD9',
                    fontSize: '18px',
                  }}
                >
                  View Artwork
                </Button>
              </Link>
            </Grid>
          </S.Bid>
        </S.Content>
      </Grid>
    </Grid>
  );
};

export default FeaturedVideo;
