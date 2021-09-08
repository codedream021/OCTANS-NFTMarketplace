import React from 'react';
import * as S from './styles';
import View from 'components/UI/View';
import Avatar from 'components/Avatar';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import BidCountdown from 'components/BidCountdown';
import Button from 'components/UI/Button';
import { Asset } from 'types/asset';
import playIcon from 'icons/play.png';
import IconButton from 'components/UI/IconButton';
import { Link } from 'react-router-dom';
import { useStore } from 'store';
import { useWeb3React } from '@web3-react/core';
import { Grid } from '@material-ui/core';
import OctansLogoSale from 'components/OctansLogoSale';


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
      <Grid item xs={12} md={6} >
        <S.Video>
          <video src={asset.previewUrl} poster={asset.thumbnailUrl} />
          <S.FeaturedBadge>Featured NFT</S.FeaturedBadge>
          <S.PlayBtn>
            <img src={playIcon} alt="Play" />
          </S.PlayBtn>
        </S.Video>
      </Grid>

      <Grid item xs={12} md={6}>
        <S.Content>
          <View row centerV marginB={46}>
            <Avatar
              src={
                'https://bafkreiecuo4clslx2zzd2mntfp7e5uppenaff4ksw54ss5kow6z4ujsfvq.ipfs.dweb.link'
              }
              size="sm"
              name={owner.address}
            />
            <S.Nickname>@{owner.user.username}</S.Nickname>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </View>
          <S.Title>{name}</S.Title>
          <S.Bid>
            <Grid container spacing={2}>
              <div>
                <S.BidLabel>Current Bid</S.BidLabel>
                <S.BidValue>123123123123<OctansLogoSale/></S.BidValue>
                <S.BidPrice>($10,021.77)</S.BidPrice>
              </div>
              <S.DivCountdown>
                <S.BidLabel>Auction ending in</S.BidLabel>
                <BidCountdown />
              </S.DivCountdown>
            </Grid>
            <Grid
              container
              spacing={5}
              justify="space-around"
              style={{ marginTop: '40px' }}
              alignItems="center"
            >
              <Button
                size="lg"
                onClick={handlePlaceBid}
                style={{ margin: '15px' }}
              >
                Place a bid
              </Button>
              <Link to={`/videos/${id}`} style={{ margin: '15px' }}>
                <Button size="lg" theme="secondary">
                  View Asset
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
