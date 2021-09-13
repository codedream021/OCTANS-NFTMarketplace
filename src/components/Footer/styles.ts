import styled from 'styled-components';

export const Footer = styled.div`
  background: #17161a;
  padding: 100px 0;
  color: #fff;
  position: relative;
  z-index: 1;
  margin-top: 50px;
`;

export const Inner = styled.div`
  display: flex;
  & > div:first-of-type {
    margin-right: 56px;
    width: 230px;
    flex-shrink: 0;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Copyright = styled.div`
  opacity: 0.5;
  font-size: 21px;
  line-height: 1.4;
`;

export const Title = styled.div`
  font-size: 33px;
  margin-bottom: 100px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Menu = styled.div`
  display: flex;
  font-size: 21px;
  line-height: 2.5;
  & > ul {
    flex: 1;
  }
`;
