import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import * as S from './styles';

const renderer = ({ formatted }: CountdownRenderProps) => {
  return (
    <S.Countdown>
      <S.CountdownItem>
        <S.CountdownValue>{formatted.hours}</S.CountdownValue>
        <S.CountdownLabel>Hours</S.CountdownLabel>
      </S.CountdownItem>
      <S.CountdownItem>
        <S.CountdownValue>{formatted.minutes}</S.CountdownValue>
        <S.CountdownLabel>Minutes</S.CountdownLabel>
      </S.CountdownItem>
      <S.CountdownItem>
        <S.CountdownValue>{formatted.seconds}</S.CountdownValue>
        <S.CountdownLabel>Seconds</S.CountdownLabel>
      </S.CountdownItem>
    </S.Countdown>
  );
};

const auctionRenderer = ({ formatted }: CountdownRenderProps) => {
  return (
    <S.Countdown>
      <S.CountdownItem isAuctionCard={true}>
        <S.CountdownValue isAuctionCard={true}>
          {formatted.hours}h
        </S.CountdownValue>
      </S.CountdownItem>
      <S.CountdownItem isAuctionCard={true}>
        <S.CountdownValue isAuctionCard={true}>
          {formatted.minutes}m
        </S.CountdownValue>
      </S.CountdownItem>
      <S.CountdownItem isAuctionCard={true}>
        <S.CountdownValue isAuctionCard={true}>
          {formatted.seconds}s
        </S.CountdownValue>
      </S.CountdownItem>
    </S.Countdown>
  );
};
const BidCountdown = ({
  isAuctionCard = false,
}: {
  isAuctionCard?: boolean;
}) => {
  return (
    <div>
      <Countdown
        date={Date.now() + 5000000}
        renderer={isAuctionCard ? auctionRenderer : renderer}
      />
    </div>
  );
};

export default BidCountdown;
