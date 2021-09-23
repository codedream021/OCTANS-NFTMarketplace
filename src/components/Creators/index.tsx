import React from 'react';
import { List } from './styles';
import { Creator } from 'types/creators';
import CreatorCard from 'components/CreatorCard';
import { useCreators } from 'api/spotlight';
import { map } from 'lodash/fp';
import BecomeCreator from 'components/Creators/BecomeCreator';
import View from 'components/UI/View';
import bg from './bg.jpg';
import bg2x from './bg@2x.jpg';
import * as S from './styles';
import Container from 'components/UI/Container';
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const renderItem = (creator: Creator) => {
  return (
    <Grid item xs={12} md={6} lg={3}  key={creator.id}>
      <CreatorCard creator={creator} />
    </Grid>
  );
};

const Creators = () => {
  const { data } = useCreators();
  return (
    <S.FeaturedCreatorsWrapper>
            <Container>
        <S.Header>
          <S.Title>Featured Creators</S.Title>
          <NavLink
            end
            to={'/creators'}
            key={'View all Creators'}
            style={{ color: '#1F232B' }}
          >
            View all Creators
          </NavLink>
        </S.Header>
      </Container>
      <Grid container spacing={3}>
        {map(renderItem, data)}
      </Grid>
    </S.FeaturedCreatorsWrapper>
  );
};

export default Creators;
