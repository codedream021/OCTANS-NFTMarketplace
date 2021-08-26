import React from 'react';
import NavBar from './NavBar';
import * as S from './styles';
import logo from './assets/logo.png';
import logo2x from './assets/logo@2x.png';
import { Link } from 'react-router-dom';
import ProfileBlock from './ProfileBlock';

const Header = () => {
  return (
    <S.Root>
      <Link to="/">
        <S.Logo>
          <img style={{maxWidth: '70px'}} src={logo} srcSet={`${logo2x} 2x`} alt="Octans NFT" />
        </S.Logo>
      </Link>
      <NavBar />
      <ProfileBlock />
    </S.Root>
  );
};

export default Header;
