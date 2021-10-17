import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: #ffffff;
  margin-top: 20px;
`;
export const Head = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  align-items: space-between;
  & :last-of-type {
    margin-left: auto;
    @media (max-width: 768px) {
      margin-left: 10px;
    }
    & :first-of-type {
      margin-right: 10px;
      color: #000;
    }
  }
  & :first-of-type {
    margin-right: auto;
    @media (max-width: 768px) {
      margin-right: 10px;
    }
  }
  & > h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: #1f232b;
  }
`;
export const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  padding: 10px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50px;
  background-color: #ffffff;
  margin-top: 20px;
  & > img {
    width: 100%;
    height: 100%;
  }
  & > span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #1f232b;
    margin-left: 10px;
  }
`;

export const Title = styled.div`
  font-size: 33px;
  font-weight: 700;
  text-align: left;
  color: #000;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const Date = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  text-align: right;
  color: #1f232b;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  background-color: #ffffff;
  margin-top: 20px;
  & > p {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    color: #1f232b;
    margin-top: 20px;
  }
  & > img {
    width: 100%;
    height: 100%;
  }
  & > h1 {
    margin-top: 40px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    text-align: left;
    font-size: 24px;
    line-height: 24px;
    color: #1f232b;
  }
`;
export const Creators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  margin-top: 20px;
  border: 1px solid #ededed;
  box-sizing: border-box;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
  margin-left: auto;
  & > h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: #1f232b;
    text-align: left;
    margin-top: 20px;
    margin-right: 100px;
  }
`;
export const Creator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const CreatorAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: #ffffff;
  margin-top: 20px;
  & > img {
    width: 47.4px;
    height: 47.4px;
  }
`;
export const CreatorName = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #1f232b;
`;

export const CreatorTitle = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #1f232b;
`;
export const Username = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
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
export const Bio = styled.div`
  margin-top: 20px;
  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    color: #1f232b;
    margin-right: 15px;
    margin-top: 10px;
  }
  & > h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #1f232b;
  }
`;

export const ReadMore = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #c4c4c4;
  margin-top: 20px;
`;

export const Swipeable = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  margin-top: 50px;
`;
export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 10px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #ffffff;
  margin-right: 10px;
  & > svg {
    width: 14.4px;
    height: 12px;
  }
  cursor: pointer;
`;
