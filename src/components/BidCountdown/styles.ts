import styled from 'styled-components';

export const Countdown = styled.div`
  display: flex;
`;
export const CountdownItem = styled.div<{ isAuctionCard?: boolean }>`
  width: ${({ isAuctionCard = false }) => (isAuctionCard ? '35px' : '68px')};
`;
export const CountdownValue = styled.div<{ isAuctionCard?: boolean }>`
  margin-bottom: 20px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ isAuctionCard = false }) =>
    isAuctionCard ? '16px' : '40px'};
  line-height: ${({ isAuctionCard = false }) =>
    isAuctionCard ? '16px' : '32px'};
  color: #1f232b;
`;
export const CountdownLabel = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1f232b;
  width: 48px;
  height: 24px;
`;
