import React from 'react';
import AuctionCard from 'components/AuctionCard';
import Container from 'components/UI/Container';
import Button from 'components/UI/Button';
import { useLive } from 'api/spotlight';
import { Asset } from 'types/asset';
import * as S from './styles';
import Swiper from 'react-id-swiper';
import { paramsWithMaxAndMin } from 'helpers/consts';
import "swiper/css/swiper.css";

// const renderItem = (asset: Asset) => {
//   return (
//     <div key={asset.id}>
//       <AuctionCard asset={asset} />
//     </div>
//   );
// };

const LiveAuctions = () => {
  const { data } = useLive();
  return (
    <>
      <Container>
        <S.Header>
          <S.Title>Live auctions</S.Title>
          <Button size="sm" theme="secondary">View all live auctions</Button>
        </S.Header>
      </Container>
      {/* <S.List>{map(renderItem, data)}</S.List> */}

      <Swiper {...paramsWithMaxAndMin(4, 1)}>
        {data?.map((asset: Asset) => {
          return (
            <div key={asset.id}>
              <AuctionCard asset={asset} />
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

export default LiveAuctions;
