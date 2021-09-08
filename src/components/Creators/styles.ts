import styled from 'styled-components';

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

export const Title = styled.div`
  font-size: 33px;
  line-height: 40px;
  font-weight: bold;
  color: #fff;
  margin-bottom: auto;
`;
