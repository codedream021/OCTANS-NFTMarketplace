import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 40px;
  justify-content: center;
  margin-bottom: 100px;
  li{
    div{
      max-height: 526px;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 150px;
  padding: 0 80px 150px;
`;

export const Header = styled.div`
  background: #1F232B;
  padding-top: 200px;
  margin-top: -100px;
  margin-bottom: 100px;
`;
