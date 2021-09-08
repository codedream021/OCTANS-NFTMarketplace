import AuctionCard from 'components/AuctionCard';
import Button from 'components/UI/Button';
import Container, { Tilt } from 'components/UI/Container';
import View from 'components/UI/View';
import React from 'react';
import * as S from './styles';
import { useFeatured } from 'api/spotlight';
import { Asset } from 'types/asset';
import Swiper from 'react-id-swiper';
import { paramsWithMaxAndMin } from 'helpers/consts';

const options = {
  scale: 1.02,
  speed: 200,
  max: 6,
};

// const wideCardIdx = 3;

// const renderItem = (asset: Asset, idx: number) => {
//   return (
//     <div key={asset.id}>
//       <AuctionCard asset={asset} horizontal={!(idx % wideCardIdx)} />
//     </div>
//   );
// };

const FeaturedVideos = (props: any) => {
  const { data } = useFeatured();
  return (
    <View marginT={100}>
      <Container>
        <S.Title>{props.name}</S.Title>
        <S.Description>{props.description}</S.Description>
        <Swiper {...paramsWithMaxAndMin(4, 1)}>
          {data?.map((asset: Asset) => {
            return (
              <Tilt options={options}>
                <S.divcard key={asset.id}>
                  <AuctionCard asset={asset} />
                </S.divcard>
              </Tilt>
            );
          })}
        </Swiper>

        <View row centerH marginT={40}>
          <Button theme="secondary" size="md">
            View all NFTs
          </Button>
        </View>
      </Container>
    </View>
  );
};

export default FeaturedVideos;
