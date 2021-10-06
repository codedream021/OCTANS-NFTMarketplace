import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  margin-top: 20px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: #FFFFFF;
  margin-top: 20px;
`;


export const Head = styled.div`
  background-color: #fff;

  & > h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: #1f232b;
  }
`;
export const Title = styled.div`
  font-size: 33px;
  font-weight: 700;
  text-align: left;
  color: #000;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  span {
    background: linear-gradient(
      270deg,
      #7549d4 0%,
      #e2486a 35.94%,
      #ed6858 69.79%,
      #f09051 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const Description = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #1f232b;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 60px;
  margin: auto;

  background: #ffffff;
  border: 2px solid #3cbad9;
  box-sizing: border-box;
  border-radius: 50px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;

  text-align: center;

  color: #3cbad9;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;
export const Cards = styled.div`
 
 
  margin:100px;
  & > div {
    margin-top: 80px;
  }

`;
export const Video = styled.div`
  height: 470px;
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
    border-radius: 20px;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    height: 440px;
  }


`;

export const LearnMoreContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin-left: 213px;
  padding: 0 24px;
`;