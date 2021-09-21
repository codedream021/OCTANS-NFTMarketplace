import styled from 'styled-components';
import Giveaway_Header from './assets/Giveaway_Header.png';

export const BannerSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  background: url(${Giveaway_Header});
  & .crsl--content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 40px;
    overflow: hidden;
    background: linear-gradient(
      90deg,
      rgba(12, 12, 10, 0.9) 0%,
      rgba(12, 12, 10, 0.2) 84.69%,
      rgba(12, 12, 10, 0) 100%
    );

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    & .crsl--text {
      max-width: 470px;
      width: 470px;
      margin-left: 215px;
      margin-top: 140px;
      & .crsl__hd {
        max-width: 100%;
        font-family: Work Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 54px;
      }
    }
    & .crsl--para {
      line-height: 20px;
      font-weight: 400;
      margin-top: 10px;
      margin-bottom: 0px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
    & .crsl__btn {
      color: #000000;
      margin-top: 30px;
      width: 160px;
      height: 48px;
      background: #ffffff;
      box-shadow: 2px 2px 15px rgba(32, 133, 158, 0.2);
      border-radius: 50px;
    }
  }
`;
