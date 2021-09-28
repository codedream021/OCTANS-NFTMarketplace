import styled from 'styled-components';

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    & > * {
      margin-bottom: 0.5rem;
    }
  }
`;
export const Header = styled.div`
  height: 340px;
  margin-top: -140px;
  margin-bottom: -100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CollectedBy = styled.div`
  width: 338px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: #000;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.04);
  border-radius: 50px;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const Title = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  /* identical to box height, or 100% */

  color: #1f232b;
`;

export const Username = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
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

export const Address = styled.div`
  width: 266px;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  border: 1px solid #edf0f4;
  box-sizing: border-box;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AddressVal = styled.div`
  color: #1f232b;
  font-weight: normal;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Id = styled.div`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(90deg, #3cbad9 0%, #4fcfef 100%);
  border-radius: 50px;
  padding: 12px;
`;
export const Profile = styled.div`
  color: #7549d4;
  margin: 50px 215px;
`;
export const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 200px;
  align-items: center;
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
    font-family: 'Work Sans', sans-serif;
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
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #1f232b;
`;
export const FollowButton = styled.button`
  border: 1px solid #f5f5f5;
  border-radius: 30px;
  padding: 10px 20px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #3cbad9;
  width: 100%;
  background: #ffffff;
  border: 2px solid #3cbad9;
  box-sizing: border-box;
  border-radius: 50px;
`;

export const CreatorPageWrapper = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Separator = styled.div`
  width: 90%;
  border-top: 1px solid #ededed;
  margin: 20px auto;
`;
export const FollowedByWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #656772;
    margin-top: 26px;
  }
`;
export const FollowedByTitle = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: #1f232b;
  margin-bottom: 20px;
`;
export const AvatarGroupWrapper = styled.div`
  margin-left: 90px;
`;
export const SocialWrapper = styled.div`
  display: flex;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
`;

export const SocialItem = styled.a`
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;

  color: #666666;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
export const SocialUsername = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #1f232b;
`;
export const Checked = styled.div`
  width: 20px;
  height: 20px;
  background: #3cbad9;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export const Joined = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #1f232b;
  & > h2 {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 10px;
    color: #1f232b;
  }
`;
