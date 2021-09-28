import { Grid } from '@material-ui/core';
import { useLive } from 'api/spotlight';
import AuctionCard from 'components/AuctionCard';
import React from 'react';
import { Asset } from 'types/asset';

const CreatorWorks: React.FC = () => {
  const { data } = useLive();
  
  return (
    <Grid container>
      {data?.map((asset: Asset) => {
        return (
          <Grid item key={asset.id} xs={12} md={6} lg={4} spacing={2} >
            <AuctionCard asset={asset} isProfileCard={true} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CreatorWorks;
