import Container from 'components/UI/Container';
import { map } from 'lodash/fp';
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import logoWhite from '../Header/assets/w_logo.png';
import logo2xWhite from '../Header/assets/w_logo@2x.png';
import View from '../UI/View';
import styled from 'styled-components';
import { ReactComponent as Facebook } from '../Header/assets/facebook.svg';
import { ReactComponent as Twitter } from '../Header/assets/twitter.svg';
import { ReactComponent as Linkedin } from '../Header/assets/linkedin.svg';
import { ReactComponent as Mail } from '../Header/assets/mail.svg';
const menu = [
  {
    path: '/explore',
    name: 'Explore',
  },
  {
    path: '/features',
    name: 'Features',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
  {
    path: '/about',
    name: 'About',
  },
];

const social = [
  {
    name: 'instagram',
    link: '',
    icon: <Facebook />,
  },
  {
    name: 'youtube',
    link: '',
    icon: <Twitter />,
  },
  {
    name: 'share',
    link: '',
    icon: <Linkedin />,
  },
];
export const ListItem = styled.li`
  list-style: none;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 20px;
  &:hover {
    color: #ffc107;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  const renderSocial = ({ name, link, icon }: any) => {
    return (
      <S.SocialItem key={name} href={link}>
        {icon}
      </S.SocialItem>
    );
  };
  const renderLink = ({ path, name }: { path: string; name: string }) => {
    return (
      <ListItem key={path}>
        <Link to={path}>{name}</Link>
      </ListItem>
    );
  };
  return (
    <S.Footer>
      <Container>
        <S.Inner>
          <div>
            <View marginB={50}>
              <img
                style={{
                  maxHeight: '70px',
                  maxWidth: '210px',
                  verticalAlign: 'middle',
                }}
                src={logoWhite}
                srcSet={`${logo2xWhite} 2x`}
                alt="Octa NFT"
              />
            </View>
            <View row>{social.map(renderSocial)}</View>
            <S.Copyright>
              ©2021 Octa. All rights reserved.
              <br />
              Terms - Privacy - Security
            </S.Copyright>
          </div>
          <S.NewsletterWrapper>
            <div>
              <S.CategoryTitle>Company</S.CategoryTitle>
              <ul>{map(renderLink, menu)}</ul>
            </div>
            <div>
              <S.CategoryTitle>Newsletter</S.CategoryTitle>
              <S.Newsletter>
                <input type="text" placeholder="name@dmain.com" />
                <span>
                  <Mail />
                </span>
              </S.Newsletter>
            </div>
          </S.NewsletterWrapper>
        </S.Inner>
      </Container>
    </S.Footer>
  );
};

export default Footer;
