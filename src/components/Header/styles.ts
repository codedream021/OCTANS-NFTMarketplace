import styled from 'styled-components';
import View from '../UI/View';

export const Logo = styled.div`
  display: inline;
`;

export const Root = styled(View)`
  position: relative;
  background-color: #20252d;
  -webkit-box-shadow: -1px 1px 15px 2px rgb(0 169 204 / 40%);
  box-shadow: -1px 1px 15px 2px rgb(0 169 204 / 40%);
`;

Root.defaultProps = {
  row: true,
  centerV: true,
  spread: true,
  paddingH: 80,
  paddingV: 10,
};

export const NavBar = styled.div`
  position: absolute;
  padding: 10px;
  left: 75%;
  transform: translateX(-75%);
  a {
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    min-width: 48px;
    border-radius: 12px;
    color: #1f232b;
    &:not(:last-child) {
      margin-right: 30px;
    }
    &.active {
      background-color: #3dbbd8;
      color: #1f232b;
      border-radius: 12px;
    }
  }
`;

export const SearchBar = styled.div`
  position: absolute;
  box-sizing: border-box;
  -webkit-box-shadow: -1px 1px 15px 2px rgb(0 169 204 / 40%);
  box-shadow: -1px 1px 15px 2px rgb(0 169 204 / 40%);
  border-radius: 12px;
  border-radius: 30px;
  padding: 10px;
  left: 75%;
  transform: translateX(-75%);
  a {
    height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 5px;
    min-width: 48px;
    font-weight: 400;
    border-radius: 12px;
    color: #1f232b;
    &:not(:last-child) {
      margin-right: 30px;
    }
    &.active {
      background-color: #40bddc;
      color: #1f232b;
      border-radius: 12px;
    }
  }
`;
