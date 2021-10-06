import React from 'react';
import { Head } from './styles';
import { Grid } from '@material-ui/core';
import * as S from './styles';
import View from 'components/UI/View';
import LearnMore from './LearnMore';

const About = () => {

  return (
    <S.Root>
      <S.Header>
        <Head>
          <img src="/images/about_header.png" alt="" />
          <h1>About</h1>
        </Head>
      </S.Header>
      <S.Cards>
          <Grid container >
            <Grid item xs={12} md={6}>
              <S.Video>
                <img src="/images/about1.png" alt="NFT" />
              </S.Video>
            </Grid>

            <Grid item xs={12} md={6}>
              <S.Content>
                <S.Title>Lorem ipsum dummy text here</S.Title>
                <S.Description>
                  Lorem ipsum dolor sit amet, an illud perpetua pro, sed tritani
                  expetenda at. Et eam posse dicant melius, an fugit impetus
                  sed. Sit fugit altera adipiscing et, eos ex lorem vituperata,
                  tollit delicatissimi an sea. Quot persequeris reprehendunt mel
                  in, ad eum sint vide equidem. Sea timeam nominavi ex, oporteat
                  phaedrum mel te. In prom pta accusata assueverit vim, an omnis
                  soluta discere.
                </S.Description>
                <S.Button>Read the announcement</S.Button>
              </S.Content>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <S.Content>
                <S.Title>Lorem ipsum dummy text here</S.Title>
                <S.Description>
                  Lorem ipsum dolor sit amet, an illud perpetua pro, sed tritani
                  expetenda at. Et eam posse dicant melius, an fugit impetus
                  sed. Sit fugit altera adipiscing et, eos ex lorem vituperata,
                  tollit delicatissimi an sea. Quot persequeris reprehendunt mel
                  in, ad eum sint vide equidem. Sea timeam nominavi ex, oporteat
                  phaedrum mel te. In prom pta accusata assueverit vim, an omnis
                  soluta discere.
                </S.Description>
              </S.Content>
            </Grid>
            <Grid item xs={12} md={6}>
              <S.Video>
                <img src="/images/about2.png" alt="NFT" />
              </S.Video>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <S.Video>
                <img src="/images/about_3.png" alt="NFT" />
              </S.Video>
            </Grid>

            <Grid item xs={12} md={6}>
              <S.Content>
                <S.Title>Lorem ipsum dummy text here</S.Title>
                <S.Description>
                  Lorem ipsum dolor sit amet, an illud perpetua pro, sed tritani
                  expetenda at. Et eam posse dicant melius, an fugit impetus
                  sed. Sit fugit altera adipiscing et, eos ex lorem vituperata,
                  tollit delicatissimi an sea. Quot persequeris reprehendunt mel
                  in, ad eum sint vide equidem. Sea timeam nominavi ex, oporteat
                  phaedrum mel te. In prom pta accusata assueverit vim, an omnis
                  soluta discere.
                </S.Description>
              </S.Content>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <S.Content>
                <S.Title>Lorem ipsum dummy text here</S.Title>
                <S.Description>
                  Lorem ipsum dolor sit amet, an illud perpetua pro, sed tritani
                  expetenda at. Et eam posse dicant melius, an fugit impetus
                  sed. Sit fugit altera adipiscing et, eos ex lorem vituperata,
                  tollit delicatissimi an sea. Quot persequeris reprehendunt mel
                  in, ad eum sint vide equidem. Sea timeam nominavi ex, oporteat
                  phaedrum mel te. In prom pta accusata assueverit vim, an omnis
                  soluta discere.
                </S.Description>
              </S.Content>
            </Grid>
            <Grid item xs={12} md={6}>
              <S.Video>
                <img src="/images/about_4.png" alt="NFT" />
              </S.Video>
            </Grid>
          </Grid>
      </S.Cards>
   
      <View  style={{
      background: "url('/images/about_bottom.png')",
    backgroundSize: "cover",
    width: "100%",
    backgroundRepeat: "no-repeat"
    }}>
      <div style={{
        padding: "100px 0px",
        background : "linear-gradient(296deg, rgba(12, 12, 10, 0.9) 0%, rgba(12, 12, 10, 0.2) 84.69%, rgba(12, 12, 10, 0) 100%)"
      }}>
<S.LearnMoreContainer>
        <LearnMore />
      </S.LearnMoreContainer>
      </div>
    </View>

    </S.Root>
  );
};

export default About;
