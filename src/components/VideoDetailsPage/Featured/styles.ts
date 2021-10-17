import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 80px;
`;

export const Video = styled.div`
  max-width: 470px;
  flex: 2;
  width: 470px;
  margin-right: 40px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  position: relative;
  margin: auto;
  @media (min-width: 768px) {
    height: 440px;
  }
  img {
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
  padding: 20px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    height: 440px;
  }

  & .content__border {
    width: 35%;
    background: #ffffff;
    border: 1px solid #f5f5f5;
    box-sizing: border-box;
    box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.04);
    border-radius: 50px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
export const Nickname = styled.div`
  width: 112px;
  height: 16px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #1f232b;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Title = styled.div`
  margin-bottom: 46px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 40px;
  color: #1f232b;
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Bid = styled.div`
  box-sizing: border-box;
  border-radius: 30px;
  color: #fff;
`;

export const BidLabel = styled.div`
  margin-bottom: 15px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #656772;
  width: 147.58px;
  height: 24px;
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
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 32px;
  color: #1f232b;
  width: 230.5px;
  height: 32px;
`;

export const BidPrice = styled.div`
  margin-top: 15px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1f232b;
  width: 147.58px;
  height: 24px;
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
  margin-left: 100px;
`;
export const PlaceBitButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  background: linear-gradient(90deg, #3cbad9 0%, #4fcfef 100%);
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;
export const ViewArtWorkButton = styled.button`
  width: 100%;
  height: 50px;
  background: #ffffff;
  border: 2px solid #3cbad9;
  box-sizing: border-box;
  border-radius: 50px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #3cbad9;
`;

export const Head = styled.div`
  background-color: #fff;
  padding-top: 100px;
  padding-bottom: 100px;
`;