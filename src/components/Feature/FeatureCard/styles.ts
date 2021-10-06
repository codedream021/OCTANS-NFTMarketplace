import styled from 'styled-components';

export const PlayIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  transition: transform 0.15s ease-in-out;
  width: 80px;
  height: 80px;
`;
export const BidValue = styled.div`
  width: 110.06px;
  height: 16px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  color: #1f232b;
  & > img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    border-radius: 50%;
  }
  & > span {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: #1f232b;
    margin-right: 5px;
  }
`;
export const BidLabel = styled.div`
  margin-bottom: 6px;
  width: 100%;
  height: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #656772;
`;

export const BidPrice = styled.div`
  font-size: 22px;
  color: #fff;
  margin-top: 20px;
`;

export const Thumb = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const Poster = styled.img`
  width: 276.78px;
  height: 276.78px;
  display: inline-block;
  border-radius: 15px 15px 0px 0px;
`;

export const Author = styled.div`
  display: flex;
  color: #000;
  align-items: center;
  margin-bottom: 26px;
  cursor: pointer;
  transition: color 0.15s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

export const Name = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #1f232b;
`;

export const Title = styled.div`
  margin: 10px;
  cursor: pointer;
  transition: color 0.15s ease-in-out;

  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;

  color: #1f232b;
`;

export const Info = styled.div`
  background-color: #f8fafc;
  border: 1px solid #edf0f4;
  border-radius: 20px;
  padding: 30px 40px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  & > div:first-of-type {
    margin-right: 50px;
  }
`;

export const InfoTitle = styled.div`
  color: #fff;
  margin-bottom: 20px;
`;

export const Card = styled.div<{
  horizontal?: boolean;
  isProfileCard?: boolean;
}>`
  display: flex;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  box-shadow: 4px 2px 15px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  height: 467px;
  @media (max-width: 768px) {
    width: 100% !important;
    height: 600px;
  }
  @media (max-width: 968px) {
    width: 100% !important;
  }
  width: ${(props) => (props.isProfileCard ? '270px' : '100%')};
  flex-direction: ${({ horizontal = false }) =>
    horizontal ? 'row' : 'column'};
  & > div:last-of-type {
    flex: 1;
    margin-left: ${({ horizontal = false }) => (horizontal ? 40 : 0)}px;
  }
  ${Thumb} {
    height: ${({ horizontal }) => (horizontal ? 340 : 467)}px;
    max-width: ${({ horizontal }) => (horizontal ? '100%' : '100%')};
  }
`;

export const AuctionCardStatus = styled.div`
  width: 100%;
  height: 66px;
  border-top: 1px solid #f5f5f5;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 15px 0px;
  padding: 15px;
`;

export const ListPrice = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #656772;
`;
export const CardFooterContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;
