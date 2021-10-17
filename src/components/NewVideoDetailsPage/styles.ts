import styled from 'styled-components';

export const AuthorName = styled.div`
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(
    270deg,
    #7549d4 0%,
    #e2486a 35.94%,
    #ed6858 69.79%,
    #f09051 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const Tag = styled.div`
  font-size: 18px;
  font-weight: bold;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #1f232b;
  padding: 10px;
  margin-left: 10px;
`;
export const SocialItem = styled.a`
  width: 80px;
  height: 80px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
  background: #ffffff;
  border: 1px solid #edf0f4;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const Container = styled.div`
  margin: 100px;
  @media (max-width: 768px) {
    margin: 50px;
  }
`;

export const Hero = styled.div`
  padding-top: 303px;
  margin-top: -203px;

  padding-bottom: 143px;
  img {
    border-radius: 20px;
  }
`;

export const Title = styled.div`
  font-size: 66px;
  color: #000;
  @media (max-width: 768px) {
    font-size: 38px;
  }
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Bid = styled.div`
  background: #fff;
  border: 1px solid #edf0f4;
  box-sizing: border-box;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  padding: 50px;
`;

export const BidLabel = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const BidInfo = styled.div`
  display: flex;
  color: #8f9bb3;
  justify-content: center;
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

export const Countdown = styled.div`
  display: flex;
`;
export const CountdownItem = styled.div`
  width: 88px;
`;
export const CountdownValue = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const CountdownLabel = styled.div`
  font-size: 22px;
  color: #17161a80;
`;

export const BidPrice = styled.div`
  font-size: 22px;
  color: #17161a80;
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

export const SectionTitle = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #1f232b;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const DescriptionText = styled.div`
  font-size: 24px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  color: #17161a80;
  p {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Edition = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  color: #1f232b;
`;

export const CertItem = styled.a`
  background: #fff;
  border: 1px solid #edf0f4;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #17161a80;
  cursor: pointer;
  img {
    margin-right: 30px;
  }
  div {
    flex: 1;

    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #1f232b;
  }
`;

export const HistoryItem = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #edf0f4;
  box-sizing: border-box;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 10px 15px;
  margin-bottom: 10px;
  & > img {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    margin-left: 20px;
  }
`;
export const HistoryPlaced = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #1f232b;
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: #656772;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const HistoryDate = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #656772;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  opacity: 0.5;
`;
export const HistoryVid = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: right;
  color: #1f232b;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  margin-bottom: 9px;
`;
export const HistoryUsd = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
text-align: right;
color: #656772;
opacity: 0.5;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Video = styled.div`
  border-radius: 20px;
  width: auto;
  height: auto;
  overflow: hidden;
  background-color: #ccc;
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(29, 31, 33, 0.2);
  display: flex;
  flex-direction: column;
  padding: 120px;
  align-items: center;
  z-index: 1000;
`;

export const FileCoinPopup = styled.div`
  width: 820px;
  background: #fff;
  border-radius: 30px;
  padding: 30px;
  color: #17161a80;
  position: relative;
`;

export const EncryptionPopup = styled.div`
  width: 540px;
  color: #17161a80;
  background: #fff;
  border-radius: 30px;
  padding: 30px;
  position: relative;
`;

export const EncryptionPopupTitle = styled.div`
  font-size: 33px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const EncryptionAddress = styled.div`
  background: #ffffff;
  border: 1px solid #edf0f4;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  color: #7549d4;
  font-size: 33px;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 30px;
  position: relative;
`;

export const CloseBtn = styled.button`
  background: #ffffff;
  border: 1px solid #edf0f4;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  width: 60px;
  height: 60px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const CopyBtn = styled.button`
  background: #ffffff;
  border: 1px solid #edf0f4;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  width: 80px;
  height: 80px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const FileCoinRow = styled.div`
  display: flex;
  border-bottom: 1px solid #e4e8ed;
  padding: 18px 0;
`;
export const FileCoinLabel = styled.div`
  width: 290px;
  font-size: 22px;
  font-weight: bold;
  flex-shrink: 0;
`;
export const FileCoinValue = styled.div`
  font-size: 22px;
  color: #7549d4;
`;

export const FileCoinViewBtn = styled.div`
  margin-top: 30px;
  & > * {
    width: 100%;
    & > * {
      width: 100%;
    }
  }
`;

export const WrongToken = styled.div`
  font-size: 33px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 400px;
  font-weight: bold;
`;

export const OwnerName = styled.div`
  font-weight: 700;
  margin-left: 20px;
  font-size: 24px;
`;
export const CreatorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
export const CreatorName = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  color: #1f232b;
`;
export const CreatorUsername = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  background: linear-gradient(89.92deg, #3cbad9 0.06%, #6ce2ff 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  width: 70%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ExploreIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  margin-left: 10px;
`;