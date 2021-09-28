import React, { SyntheticEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCreator } from 'api/creators';
import View from 'components/UI/View';
import Avatar from 'components/Avatar';
import Spinner from 'components/UI/Spinner';
import Container from 'components/UI/Container';
import bg from './assets/bg.jpg';
import * as S from './styles';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import { ReactComponent as CopyIcon } from 'icons/copy.svg';
import Button from 'components/UI/Button';
import cutString from 'helpers/cutString';
import { Tab } from './share';
import TabNav from '../UI/TabNav';
import { Grid } from '@material-ui/core';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Avatar as Avatarr } from '@mui/material';
import { IconButton } from '@mui/material';
import { Asset } from 'types/asset';
import AuctionCard from 'components/AuctionCard';
import { useLive } from 'api/spotlight';
import CreatorWorks from './CreatorWorks/CreatorWorks';

const tabs = [
  {
    id: Tab.videoArt,
    name: 'Video Art',
  },
  {
    id: Tab.valuables,
    name: 'Valuables',
  },
];

const CreatorPage = () => {
  const { id } = useParams();
  const { data } = useCreator(id);

  const [tab, setTab] = useState(Tab.videoArt);
  if (!data) return <Spinner />;
  const { profileImgUrl, address, user } = data;
  const shortAddress = cutString(address, 6, 5);
  const { name, username } = user;
  console.log({ data });
  const handleSwitchTab = (e: SyntheticEvent<HTMLButtonElement>) => {
    setTab(+(e.currentTarget.dataset.tab as any));
  };
  return (
    <S.CreatorPageWrapper>
      <Container>
        <S.TopHeader>
          <S.Address>
            <S.Id>#29710</S.Id>
            <S.AddressVal>{shortAddress}</S.AddressVal>
            <IconButton size="small">
              <CopyIcon />
            </IconButton>
          </S.Address>
          <S.CollectedBy>
            Collected By{' '}
            <AvatarGroup
              max={5}
              spacing="small"
              sx={{ width: '20px', height: 'auto' }}
            >
              <Avatarr sx={{ width: 28, height: 28 }} src={profileImgUrl} />
              <Avatarr
                sx={{ width: 28, height: 28 }}
                src="/images/groupavatar1.png"
              />
              <Avatarr sx={{ width: 28, height: 28 }} src={profileImgUrl} />
              <Avatarr
                sx={{ width: 28, height: 28 }}
                src="/images/groupavatar1.png"
              />
            </AvatarGroup>
            <Link to="#">View All</Link>
          </S.CollectedBy>
        </S.TopHeader>

        <Grid container style={{ marginTop: '50px' }} spacing={2}>
          <Grid item lg={3} xs={12}>
            <Avatar size="lg" src={profileImgUrl} name={address} />
            <S.Title>{name}</S.Title>
            <S.Username>@{username}</S.Username>
           <S.Social>
           <S.Followers>
            <S.Number>1259</S.Number>
            <span>
              Followers
            </span>
          </S.Followers>
          <S.Followers>
            <S.Number>1259</S.Number>
            <span>
              Followers
            </span>
          </S.Followers>
             </S.Social>
          <S.FollowButton>
            Follow
          </S.FollowButton>
          <S.Separator />
          </Grid>
          <Grid item lg={9} xs={12} >
            <CreatorWorks />
          </Grid>
        </Grid>
      </Container>
    </S.CreatorPageWrapper>
  );
};

export default CreatorPage;
{
  /* <View row centerV marginB={50} >
                        <S.Title>{name}</S.Title>
            <S.Username>@{username}</S.Username>
          </View> */
}
{/* <TabNav tabs={tabs} activeTab={tab} onChange={setTab} /> */}
