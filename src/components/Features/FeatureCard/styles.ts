import styled from 'styled-components';


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

export const Date = styled.div`
font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 40px;
display: flex;
align-items: center;
color: #1F232B;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  & span {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: #1F232B;
  }
`;
export const Creator = styled.div`
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
export const Video = styled.div`
  height: 470px;
  flex: 2;
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

