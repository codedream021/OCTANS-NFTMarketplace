import styled from 'styled-components';

export const Footer = styled.div`
  background: #17161a;
  padding: 100px 0;
  color: #fff;
  position: relative;
  z-index: 1;
`;
export const SocialItem = styled.a`

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  & > div:first-of-type {
    margin-right: 56px;
    width: 50%;
    flex-shrink: 0;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Copyright = styled.div`
font-family: Work Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
opacity:0.5;
`;

export const Title = styled.div`
  font-size: 33px;
  margin-bottom: 100px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const CategoryTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
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

export const NewsletterWrapper = styled.div`
  display: flex;
  & > div {
    margin-left: 50px;
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
  border: none;
  background: transparent;
  padding: 10px;
  font-size: 14px;
  font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
color: #C4C5C8;
@media (max-width: 768px) {
  font-size: 12px;
  width: 90%;
}
}
`;