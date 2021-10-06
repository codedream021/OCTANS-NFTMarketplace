import React from 'react';
import { Head } from './styles';
import * as S from './styles';
import { ReactComponent as BackIcon } from 'icons/back.svg';
import { Grid } from '@material-ui/core';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <Box m={8}>
      <S.Header>
        <S.Head>
          <Link to="/features">
            <S.Back>
              <BackIcon />
              <span>Back</span>
            </S.Back>
          </Link>
          <S.Title>Features title here</S.Title>
          <S.Date>Sep 15 - Oct 15</S.Date>
        </S.Head>
      </S.Header>
      <Grid container>
        <Grid item xs={12} md={8}>
          <S.Content>
            <img src="/images/features.png" alt="features" />
            <h1>Celebrating Hispanic Heritage Month with SuperRare</h1>
            <p>
              At vim altera vocent constituto, ius vivendo accommodare ad.
              Primis habemus in duo, et aperiam electram liberavisse sed, eu eos
              impetus omittam laboramus. Mei dicunt lobortis electram id, sed eu
              denique senserit principes. No qui partiendo petentium, dolores
              constituto in eos, nihil recteque mei ei. An has fugit detracto,
              volutpat voluptaria definitiones nam ad. Et eam dolorem corrumpit
              comprehensam, qui no homero similique neglegentur. Pri an errem
              voluptatum, exerci commodo lucilius at has. Feugiat adolescens vix
              id. Eius accusam definitionem in usu, aperiam partiendo ut mea.
              Timeam volutpat at quo. At vim altera vocent constituto, ius
              vivendo accommodare ad. Primis habemus in duo, et aperiam electram
              liberavisse sed, eu eos impetus omittam laboramus. Mei dicunt
              lobortis electram id, sed eu denique senserit principes. No qui
              partiendo petentium, dolores constituto in eos, nihil recteque mei
              ei. An has fugit detracto, volutpat voluptaria definitiones nam
              ad. At vim altera vocent constituto, ius vivendo accommodare ad.
              Primis habemus in duo, et aperiam electram liberavisse sed, eu eos
              impetus omittam laboramus. Mei dicunt lobortis electram id, sed eu
              denique senserit principes. No qui partiendo petentium, dolores
              constituto in eos, nihil recteque mei ei. An has fugit detracto,
              volutpat voluptaria definitiones nam ad. Duo et aperiam electram
              liberavisse sed, eu eos impetus omittam laboramus. Mei dicunt
              lobortis electram id, sed eu denique senserit principes. No qui
              partiendo petentium, dolores constituto in eos, nihil recteque mei
              ei. An has fugit detracto, volutpat voluptaria definitiones nam
              ad.
            </p>
          </S.Content>
        </Grid>
        <Grid item xs={12} md={4}>
          <S.Creators>
            <h2>Creators</h2>
            <S.Creator>
              <S.CreatorAvatar>
                <img src="https://via.placeholder.com/150" alt="avatar" />
              </S.CreatorAvatar>
              <S.CreatorName>Creator name</S.CreatorName>
            </S.Creator>
            <h2>Artists</h2>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <S.Creator key={index}>
                <S.CreatorAvatar>
                  <img src="https://via.placeholder.com/150" alt="avatar" />
                </S.CreatorAvatar>
                <S.CreatorName>Creator name</S.CreatorName>
              </S.Creator>
            ))}
          </S.Creators>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Feature;
