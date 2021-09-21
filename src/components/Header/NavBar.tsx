import React from 'react';
import { NavLink } from 'react-router-dom';
import { map } from 'lodash/fp';
import * as S from './styles';

interface Link {
  path: string;
  name: string;
}

const menu: Link[] = [
  {
    path: '/explore',
    name: 'Explore',
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

const NavBar = () => {
  const renderLink = ({ name, path }: Link) => {
    return (
      <NavLink end to={path} key={name}>
        {name}
      </NavLink>
    );
  };
  return <S.NavBar>{map(renderLink, menu)}</S.NavBar>;
};

export default NavBar;
