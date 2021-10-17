import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;

  color: #1f232b;
  margin-bottom: 1rem;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  list-style: none;
  justify-content: left;
  & > li {
    ::before {
      content: '·';
      font-size: 50px;
      vertical-align: middle;
      line-height: 20px;
    }
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #1f232b;
    margin-bottom: 20px;
    margin-right: 1rem;
  }
`;

export const Newsletter = styled.div`
  border: 1px solid #656772;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  box-sizing: border-box;
  border-radius: 5px;
  & > span {
    padding: 10px;
    background: linear-gradient(90deg, #3CBAD9 0%, #4FCFEF 100%);
border-radius: 0px 5px 5px 0px;
  }
  & > input {
    width: 90%;
    border: none;
    background: transparent;
    padding: 10px;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #c4c5c8;
    @media (max-width: 768px) {
      font-size: 12px;
      width: 90%;
    }
  }
`;
