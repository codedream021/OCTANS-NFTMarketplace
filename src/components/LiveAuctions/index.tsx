import React from 'react';
import AuctionCard from 'components/AuctionCard';
import Container from 'components/UI/Container';
import { useLive } from 'api/spotlight';
import { Asset } from 'types/asset';
import * as S from './styles';
import Swiper from 'react-id-swiper';
import { paramsWithMaxAndMin } from 'helpers/consts';
import { NavLink } from 'react-router-dom';
import 'swiper/css/swiper.css';

const LiveAuctions = ({
  title,
  linkText,
}: {
  title: string;
  linkText: string;
}) => {
  const { data } = useLive();
  console.log(data)
  return (
    <S.LiveAuctionWrapper>
      <Container>
        <S.Header>
          <S.Title>{title}</S.Title>
          <div>
          <NavLink
            end
            to={'/auctions'}
            key={'View all Auctions'}
            style={{ color: '#1F232B' }}
          >
            {linkText}
          </NavLink>
          </div>
        </S.Header>
      </Container>
      {/* <S.List>{map(renderItem, data)}</S.List> */}

    <Container>
      <Swiper {...paramsWithMaxAndMin(4, 1)}>
        {data?.map((asset: Asset) => {
          return (
            <div key={asset.id}>
              <AuctionCard asset={asset} />
            </div>
          );
        })}
      </Swiper>
      </Container>
    </S.LiveAuctionWrapper>
  );
};

export default LiveAuctions;
