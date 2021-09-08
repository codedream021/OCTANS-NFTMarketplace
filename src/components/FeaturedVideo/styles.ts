import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 80px;
`;

export const Video = styled.div`
  max-width: 900px;
  flex: 2;
  width: 90%;
  margin-right: 40px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  position: relative;
  margin: auto;
  @media (min-width: 768px) {
    height: 642.444px;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
  background: rgba(23, 22, 26, 0.5);
  border-radius: 16px;
  left: 30px;
  top: 30px;
  color: #fff;
  padding: 13px 16px;
  letter-spacing: 0.1em;
`;
export const PlayBtn = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
export const Content = styled.div`
  width: 90%;
  color: #fff;
  margin: auto;
  box-shadow: 0px 0px 35px 0px rgba(60, 186, 217, 0.75);
  -webkit-box-shadow: 0px 0px 35px 0px rgba(60, 186, 217, 0.75);
  -moz-box-shadow: 0px 0px 35px 0px rgba(60, 186, 217, 0.75);
  background: #20252d;
  padding: 40px 40px 20px;
  border-radius: 30px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    height: 642.444px;
  }
`;
export const Nickname = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Title = styled.div`
  font-size: 66px;
  font-weight: 700;
  margin-bottom: 46px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Bid = styled.div`
  box-sizing: border-box;
  border-radius: 30px;
  color: #fff;
`;

export const BidLabel = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #41bedb;
`;

export const BidInfo = styled.div`
  display: flex;
  & > div {
    flex: 1;
    &:first-of-type {
      margin-right: 20px;
    }
  }
`;

export const BidValue = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const BidPrice = styled.div`
  font-size: 22px;
  color: #41bedb;
  margin-top: 20px;
`;

export const BidBtns = styled.div`
  display: flex;
  margin-top: 50px;
  & > * {
    flex: 1;
    &:first-of-type {
      margin-right: 20px;
    }
  }
`;

export const DivCountdown = styled.div`
  margin-left:25%;
`;
