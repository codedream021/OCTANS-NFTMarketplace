import React from 'react';
import View from '../UI/View';
import { Container, WrongToken } from './styles';
import Description from './Description';
import EditionOf from './EditionOf';
import Certificate from './Certificate';
import History from './History';
import Spinner from 'components/UI/Spinner';
import { useParams } from 'react-router-dom';
import { useAsset } from 'api/assets';
import Featured from './Featured';
import { Grid } from '@material-ui/core';
import Separator from 'components/UI/Separator';
import Tags from './Tags';
import Creator from './Creator';
const VideoDetailsPage = () => {
  const params = useParams();
  const { data, isLoading, isError } = useAsset(+params.uid);

  if (isLoading)
    return (
      <View marginV={300}>
        <Spinner />
      </View>
    );

  if (isError) {
    return <WrongToken>Wrong token</WrongToken>;
  }

  return (
    <div>
      <Featured asset={data} />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {/* <Bid asset={data} /> */}
            <Description text={data.description} />
            <Separator width="100" />
            <EditionOf />
            <Separator width="100" />
            <Tags data={['Generative', 'Concept Art']} />
            <Certificate data={data} />
            <Separator width="100" />
            <Creator asset={data} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <History />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default VideoDetailsPage;
