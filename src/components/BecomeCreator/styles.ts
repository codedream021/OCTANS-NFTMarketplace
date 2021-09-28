import styled from 'styled-components';

export const Title = styled.div`
  font-size: 66px;
  font-weight: 700;
  color: #000;
  margin-bottom: 50px;
  text-align: center;
  padding: 0 80px;
  @media (max-width: 768px) {
    font-size: 38px;
    padding: 0 20px;
  }
`;

export const Description = styled.div`
  font-size: 33px;
  text-align: center;
  color: #000;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Bg = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-top: 100px;
  margin-bottom: -150px;
  img {
    width: 2320px;
    @media (max-width: 768px) {
      width: 100%;
      height: 200px;
    }
  }
`;
