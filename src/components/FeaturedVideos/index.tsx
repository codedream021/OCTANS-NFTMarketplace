import AuctionCard from 'components/AuctionCard';
import Button from 'components/UI/Button';
import Container from 'components/UI/Container';
import View from 'components/UI/View';
import React from 'react';
import * as S from './styles';
import { useFeatured } from 'api/spotlight';
import { Asset } from 'types/asset';
import Swiper from 'react-id-swiper';
import { paramsWithMaxAndMin } from 'helpers/consts';

// const wideCardIdx = 3;

// const renderItem = (asset: Asset, idx: number) => {
//   return (
//     <div key={asset.id}>
//       <AuctionCard asset={asset} horizontal={!(idx % wideCardIdx)} />
//     </div>
//   );
// };

const FeaturedVideos = () => {
  const { data } = useFeatured();
  return (
    <View marginT={100}>
      <Container>
        <S.Title>Featured NFTs</S.Title>
      
      <Swiper {...paramsWithMaxAndMin(3, 1)}>
        {data?.map((asset: Asset) => {
          return (
            <div key={asset.id}>
              <AuctionCard asset={asset} />
            </div>
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
