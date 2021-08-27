import Container from 'components/UI/Container';
import { map } from 'lodash/fp';
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import logo from './logo.png';
import View from '../UI/View';

const menu = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/videos',
    name: 'Browse',
  },
    {
    path: '/collections',
    name: 'Collections',
  },
  {
    path: '/creators',
    name: 'Creators',
  },
];

const menu2 = [
  {
    path: '/terms',
    name: 'Terms of Service',
  },
  {
    path: '/privacy',
    name: 'Privacy',
  },
  {
    path: '/help',
    name: 'Help',
  },
];

const Footer = () => {
  const renderLink = ({ path, name }: { path: string; name: string }) => {
    return (
      <li key={path}>
        <Link to={path}>{name}</Link>
      </li>
    );
  };
  return (
    <S.Footer>
      <Container>
        <S.Inner>
          <div>
            <View marginB={50}>
              <img src={logo} width={80} height={80} alt="VideCoin" />
            </View>
            <S.Copyright>
              © 2021, OctansNFT. <br />
              All Right Reserved
            </S.Copyright>
          </div>
          <div>
            <S.Title>
              Thank you for your interests in Octans NFT
            </S.Title>
            <S.Menu>
              <ul>{map(renderLink, menu)}</ul>
              <ul>{map(renderLink, menu2)}</ul>
            </S.Menu>
          </div>
        </S.Inner>
      </Container>
    </S.Footer>
  );
};

export default Footer;
