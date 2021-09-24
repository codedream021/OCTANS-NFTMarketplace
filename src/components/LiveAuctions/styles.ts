import styled from 'styled-components';

export const List = styled.div`
  padding: 30px 20px;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  & > div {
    margin: 0 20px;
    min-width: 540px;
    &:last-child {
      padding-right: 40px;
      min-width: 580px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: #1f232b;
  width: 470px;
  height: 32px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const LiveAuctionWrapper = styled.div`
  max-width: 85%;
  margin: 0px auto;
  margin-bottom: 100px;
  background: #fff;
  & > .swiper-container {
    padding-bottom: 20px;
  }
`;
