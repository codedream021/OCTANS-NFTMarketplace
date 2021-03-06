import React from 'react';
import { Grid } from '@material-ui/core';
import Separator from 'components/UI/Separator';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { useMediaQuery } from 'hooks';

function FeatureCard({
  revert,
  title,
  description,
  date,
  creator,
}: {
  revert?: boolean;
  title: string;
  description: string;
  date: string;
  creator: string;
}) {
  const {isDesktop} = useMediaQuery();
  return (
    <Grid container direction={(isDesktop && revert) ? 'row-reverse' : 'row'} >
      <Grid item xs={12} md={8}>
        <S.Video>
          <img src="/images/features.png" alt="NFT" />
        </S.Video>
      </Grid>
      <Grid item xs={12} md={4}>
        <S.Content>
          <S.TitleWrapper>
            <S.Date>
              <h3>{date.substr(0, 2)}</h3> <span>{date.substr(2, 4)}</span>
            </S.Date>
            <Link to="/feature/1">
              <S.Title>{title}</S.Title>
            </Link>
          </S.TitleWrapper>
          <S.Creator>
            <h3>Creator</h3>
            <p>{creator}</p>
          </S.Creator>
          <Separator width="100" />
          <S.Description>
            <h3>Feature Artists</h3>
            {description}
          </S.Description>
        </S.Content>
      </Grid>
    </Grid>
  );
}

export default FeatureCard;
