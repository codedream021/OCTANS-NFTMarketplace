import React from 'react';
import LiveAuctions from '../LiveAuctions';
import { Head} from './styles';
import Creators from '../Creators';
import FeaturedVideo from 'components/FeaturedVideo';
import { useFeatured } from 'api/spotlight';
import BannerSection from './BannerSection';
import CreativeEconomy from 'components/CreativeEconomy';

const Home = () => {
  const { data } = useFeatured();
  if (!data || data.length === 0) return null;
  return (
    <div>
      <BannerSection />
      <Head>
        <FeaturedVideo asset={data[0]} />
      </Head>
      <LiveAuctions
        title={'Trending Auctions'}
        linkText={'View all Auctions'}
      />
      <LiveAuctions
        title={'Featured Artworks'}
        linkText={'View all Artworks'}
      />

      <Creators />
      {/* <BecomeCreator /> */}
      <CreativeEconomy/>
    </div>
  );
};

export default Home;
