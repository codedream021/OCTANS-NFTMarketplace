import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  display: block;
  background: #fff;
  border: 1px solid #edf0f4;
  min-height: 436px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
`;

export const Bg = styled.div`
  height: 195px;
  border-radius: 30px 30px 0 0;
  img {
    border-radius: 30px 30px 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: inline-block;
  }
`;

export const Content = styled.div`
  padding: 0 30px 46px;
  position: relative;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  color: #656772;
  box-sizing: border-box;
`;
export const CardFooter = styled.div`
  padding: 0 30px;
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #ffffff;
  border: 1px solid #f5f5f5;
`;
export const Followers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 30px 0;
  align-items: flex-start;
  span {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-align: right;
    margin-top: 10px;
    color: #656772;
  }
`;
export const Number = styled.div`
font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 16px;
color: #1F232B;
`;
export const FollowButton = styled.button`
  border: 1px solid #f5f5f5;
  border-radius: 30px;
  padding: 10px 20px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #3cbad9;

  background: #FFFFFF;
border: 2px solid #3CBAD9;
box-sizing: border-box;
border-radius: 50px;
`;
export const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #656772;
  margin-top: 15px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Nickname = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  white-space: nowrap;
  display: inline-block;
  background: #3cbad9;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
export const Description = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-top: 10px;
  color: #656772;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
