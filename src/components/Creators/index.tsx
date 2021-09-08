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

const renderItem = (creator: Creator) => {
  return (
    <div key={creator.id}>
      <CreatorCard creator={creator} />
    </div>
  );
};

const Creators = () => {
  const { data } = useCreators();
  return (
    <View marginT={100} >
      <List  style={{  
  backgroundImage: "url(" + bg + ")"
}}>
        <BecomeCreator />
        {map(renderItem, data)}
      </List>
    </View>
  );
};

export default Creators;
