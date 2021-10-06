import React from 'react';
import * as S from './styles';
import { ReactComponent as BackIcon } from 'icons/back.svg';
import { Grid } from '@material-ui/core';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Avatar from 'components/Avatar';
import Swiper from 'react-id-swiper';
import { paramsWithMaxAndMin } from 'helpers/consts';
import FeatureCard from './FeatureCard';
import { ReactComponent as LeftIcon } from "icons/left.svg";
import { ReactComponent as RightIcon } from "icons/right.svg";
const Feature = () => {
  return (
    <Box m={8}>
      <S.Header>
        <S.Head>
          <S.Back>
            <Link to="/features">
              <BackIcon />
              <span>Back</span>
            </Link>
          </S.Back>
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

      <Grid container style={{marginTop:"100px"}}>
        <Grid item xs={12} md={4}>
          <Avatar size="lg" src={"/images/hcphotos-Headshots-1 1.png"} name={"rvyaltsevvvv"} />
          <S.CreatorTitle>{"rvyaltsevvvv"}</S.CreatorTitle>
          <S.Username>@{"shvembldr"}</S.Username>
          <S.Bio>
            <h3>Bio</h3>
            <p>
            At vim altera vocent constituto, ius vivendo accommodare ad. Primis
            habemus in duo, et aperiam electram liberavisse sed eos impetus
            omittam laboramus. Mei dicunt lobortis.
            </p>
          </S.Bio>
          <S.ReadMore>
            Read More
          </S.ReadMore>
          <S.Swipeable>
            <S.Circle>
              <LeftIcon />
            </S.Circle>
            <S.Circle>
              <RightIcon />
            </S.Circle>
          </S.Swipeable>
        </Grid>
        <Grid item xs={12} md={8}>
        <Swiper {...paramsWithMaxAndMin(3, 1)}>
        { [1,2,3,4].map((index) => {
          return (
            <div key={index}>
              <FeatureCard />
            </div>
          );
        })}
      </Swiper>
        </Grid>
      </Grid>
      <Grid container style={{marginTop:"100px"}}>
        <Grid item xs={12} md={4}>
          <Avatar size="lg" src={"/images/hcphotos-Headshots-1 1.png"} name={"rvyaltsevvvv"} />
          <S.CreatorTitle>{"rvyaltsevvvv"}</S.CreatorTitle>
          <S.Username>@{"shvembldr"}</S.Username>
          <S.Bio>
            <h3>Bio</h3>
            <p>
            At vim altera vocent constituto, ius vivendo accommodare ad. Primis
            habemus in duo, et aperiam electram liberavisse sed eos impetus
            omittam laboramus. Mei dicunt lobortis.
            </p>
          </S.Bio>
          <S.ReadMore>
            Read More
          </S.ReadMore>
          <S.Swipeable>
            <S.Circle>
              <LeftIcon />
            </S.Circle>
            <S.Circle>
              <RightIcon />
            </S.Circle>
          </S.Swipeable>
        </Grid>
        <Grid item xs={12} md={8}>
        <Swiper {...paramsWithMaxAndMin(3, 1)}>
        { [1,2,3,4].map((index) => {
          return (
            <div key={index}>
              <FeatureCard />
            </div>
          );
        })}
      </Swiper>
        </Grid>
      </Grid>
      <Grid container style={{marginTop:"100px"}}>
        <Grid item xs={12} md={4}>
          <Avatar size="lg" src={"/images/hcphotos-Headshots-1 1.png"} name={"rvyaltsevvvv"} />
          <S.CreatorTitle>{"rvyaltsevvvv"}</S.CreatorTitle>
          <S.Username>@{"shvembldr"}</S.Username>
          <S.Bio>
            <h3>Bio</h3>
            <p>
            At vim altera vocent constituto, ius vivendo accommodare ad. Primis
            habemus in duo, et aperiam electram liberavisse sed eos impetus
            omittam laboramus. Mei dicunt lobortis.
            </p>
          </S.Bio>
          <S.ReadMore>
            Read More
          </S.ReadMore>
          <S.Swipeable>
            <S.Circle>
              <LeftIcon />
            </S.Circle>
            <S.Circle>
              <RightIcon />
            </S.Circle>
          </S.Swipeable>
        </Grid>
        <Grid item xs={12} md={8}>
        <Swiper {...paramsWithMaxAndMin(3, 1)}>
        { [1,2,3,4].map((index) => {
          return (
            <div key={index}>
              <FeatureCard />
            </div>
          );
        })}
      </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Feature;
