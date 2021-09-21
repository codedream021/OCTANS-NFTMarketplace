import React from 'react';
import LiveAuctions from '../LiveAuctions';
import Subscribe from './Subscribe';
import { Head, Title } from './styles';
import FeaturedVideos from 'components/FeaturedVideos';
import BecomeCreator from 'components/BecomeCreator';
import Creators from '../Creators';
import FeaturedVideo from 'components/FeaturedVideo';
import { useFeatured } from 'api/spotlight';
import BannerSection from './BannerSection';

const Home = () => {
  const { data } = useFeatured();
  if (!data || data.length === 0) return null;
  return (
    <div>
      <BannerSection />
      <Head>
        <Title>
          Welcome to &nbsp;
          <span>Octans</span> NFTs.
        </Title>
        <FeaturedVideo asset={data[0]} />
      </Head>
      <Subscribe />
      <LiveAuctions />
      <FeaturedVideos
        name="Collection A"
        description="Sample Description for Collection A"
      />
      <FeaturedVideos
        name="Collection B"
        description="Sample Description for Collection B"
      />
      <FeaturedVideos
        name="Collection C"
        description="Sample Description for Collection C"
      />
      <Creators />
      <BecomeCreator />
    </div>
  );
};

export default Home;
