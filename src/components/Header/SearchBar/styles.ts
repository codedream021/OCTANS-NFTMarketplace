import styled from 'styled-components';

export const SearchBar = styled.div<{ focus: boolean }>`
  position: relative;
  border: 1px solid #F5F5F5;
  overflow: hidden;
  width: 320px;
  height: 48px;
  box-sizing: border-box;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
  margin-right: 40px;
  input {
    border-radius: 24px;
    background: #fff;
    border: 1px solid #edf0f4;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    height: 48px;
    padding: 0 46px;
    width: 100%;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    line-height: 28px;
    font-family: 'Work Sans', sans-serif;
    @media (max-width: 768px) {
      font-size: 20px;
      height: 60px;
      padding: 0 42px;
    }
    &::placeholder {
      color: #c4c5c8;
    }
  }
`;

export const Loader = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  top: 16px;
  bottom: 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;
