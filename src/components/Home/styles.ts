import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid #edf0f4;
  margin-bottom: 100px;
`;

export const SubscribeTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SubscribeDesc = styled.div`
  text-align: center;
  font-size: 28px;
  line-height: 46px;
  color: #fff;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Title = styled.div`
  font-size: 33px;
  font-weight: 700;
  text-align: center;
  color: #fff;
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

export const Head = styled.div`
  background-color: #fff;
  padding-top: 100px;
  padding-bottom: 100px;
`;
