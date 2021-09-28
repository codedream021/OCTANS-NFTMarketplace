import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;

`;
export const Title = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Work Sans', sans-serif;
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

export const List = styled.div`
  padding: 30px 20px;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #f8fafc;
  padding: 100px 0;
  & > div {
    margin: 0 20px;
    min-width: 350px;
    &:last-child {
      padding-right: 40px;
      min-width: 390px;
    }
  }
`;
export const BecomeCard = styled.div`
  border: 1px solid #edf0f4;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  padding: 60px 40px 40px;
  width: 350px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.85);
`;

export const Subttl = styled.div`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 30px;
`;

export const FeaturedCreatorsWrapper = styled.div`
  max-width: 90%;
  margin: 0px auto;
  margin-bottom: 100px;
  background: #fff;
`;
