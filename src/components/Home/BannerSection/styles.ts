import styled from 'styled-components';
import Giveaway_Header from './assets/Giveaway_Header.png';

export const BannerSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  background: url(${Giveaway_Header});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & .crsl--content {
    @media (min-width: 768px) {
      width: 70%;
    }
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(12, 12, 10, 0.9) 0%,
      rgba(12, 12, 10, 0.2) 84.69%,
      rgba(12, 12, 10, 0) 100%
    );

   
    & .crsl--text {
      max-width: 470px;
      width: 470px;
      margin-left: 215px;
      @media (max-width: 768px) {
        margin-left: 50px;
        padding: 10px;
        max-width: unset;
        width: unset;
      }
      margin-top: 140px;
      & .crsl__hd {
        max-width: 100%;
        font-family: 'Work Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 54px;
        @media (max-width: 768px) {
          font-size: 32px;
          line-height: 40px;
          wrap-text: break-word;
        }
      }
    }
    & .crsl--para {
      line-height: 20px;
      font-weight: 400;
      margin-top: 10px;
      margin-bottom: 0px;
      font-family: 'Work Sans', sans-serif;
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
