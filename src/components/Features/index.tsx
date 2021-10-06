import React from 'react';
import { Head } from './styles';
import { Grid } from '@material-ui/core';
import * as S from './styles';
import FeatureCard from './FeatureCard';
const featuresData = [
  {
    title: 'Lorem ipsum dummy text here',
    date: "15 September 2021",
    creator: "John Doe",
    revert :false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Easy to use',
    date: "15 July 2020",
    creator: "John Doe",
    revert :true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Easy to use',
    date: "15 July 2020",
    creator: "John Doe",
    revert :false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Easy to use',
    date: "15 July 2020",
    creator: "John Doe",
    revert :true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Easy to use',
    date: "15 July 2020",
    creator: "John Doe",
    revert :false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
const Features = () => {
  return (
    <S.Root>
      <S.Header>
        <Head>
          <h1>Features</h1>
        </Head>
      </S.Header>
      <S.Cards>
        {
          featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              revert={feature.revert}
              date={feature.date}
              creator={feature.creator}
              description={feature.description}
            />
          ))
        }
       
      </S.Cards>
    </S.Root>
  );
};

export default Features;
