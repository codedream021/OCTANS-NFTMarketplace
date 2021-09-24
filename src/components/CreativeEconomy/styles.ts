import styled from 'styled-components';

export const Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 68px;
  width: 50%;
  margin: auto;
  text-align: center;
  color: #ffffff;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
  padding: 0 80px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 32px;
    padding: 0 20px;
  }
`;

export const Description = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  margin:auto;
  width: 30%;
  padding: 0 20px;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 24px;
    width: 100%;
    padding: 0 20px;
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
