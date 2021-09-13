import styled from 'styled-components';
import View from '../UI/View';

export const Logo = styled.div`
display: inline;
`;

export const Root = styled(View)`
  position: relative;
  background-color: #20252D;
  -webkit-box-shadow:-1px 1px 15px 2px rgb(0 169 204 / 40%);
  box-shadow:-1px 1px 15px 2px rgb(0 169 204 / 40%);
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
  background: #15181D;
  border: 1px solid #40BDDC;
  box-sizing: border-box;
  -webkit-box-shadow:-1px 1px 15px 2px rgb(0 169 204 / 40%) ;
  box-shadow:-1px 1px 15px 2px rgb(0 169 204 / 40%); border-radius: 12px;
  border-radius: 30px;
  padding: 10px;
  left: 50%;
  transform: translateX(-50%);
  a {
    height: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding:5px;
    min-width: 110px;
    font-weight: 700;
    background: #343539;
    border-radius: 12px;
    color:white;
    &:not(:last-child) {
      margin-right: 10px;
    }
    &.active {
      background-color: #40BDDC;
      color: #fff;
      border-radius: 12px;
    }
  }
`;
