import React from 'react';
import { map } from 'lodash/fp';
import * as S from './styles';
import Avatar from '../Avatar';
import View from '../UI/View';
import OctansLogoSale from 'components/OctansLogoSale';

interface HistoryItemProps {
  id: number;
  avatar: string;
  name: string;
  placedBy: string;
  date: string;
  amountVid: string;
  amountUsd: string;
}

const HistoryItem = ({
  item: { avatar, name, date, amountVid, amountUsd, placedBy },
}: {
  item: HistoryItemProps;
}) => {
  return (
    <S.HistoryItem>
      <S.Flex style={{width:"100%"}}>
      <Avatar src={avatar} name={name} />
        <S.HistoryPlaced>
          Bid placed by <span>{placedBy}</span>
        <S.HistoryDate>{date}</S.HistoryDate>
        </S.HistoryPlaced>
      </S.Flex>
      <S.Flex>
      <View marginL="auto">
        <S.HistoryVid>{amountVid} OCTA</S.HistoryVid>
        <S.HistoryUsd>{amountUsd}</S.HistoryUsd>
      </View>
      <S.ExploreIcon src="/images/explore.svg" width={32} height={32} />
      </S.Flex>
    </S.HistoryItem>
  );
};

const data: HistoryItemProps[] = [
  {
    id: 1,
    name: 'gloria',
    avatar: 'https://i.pravatar.cc/160?img=5',
    placedBy: '@gloria_queen',
    date: 'March 12, 2021 at 1:25am',
    amountVid: '978.50',
    amountUsd: '$483.49',
  },
  {
    id: 2,
    name: 'gloria',
    avatar: 'https://i.pravatar.cc/160?img=8',
    placedBy: '0xD4a0...F6bD',
    date: 'March 12, 2021 at 1:25am',
    amountVid: '654.50',
    amountUsd: '$321.55',
  },
  {
    id: 3,
    name: 'gloria',
    avatar: 'https://i.pravatar.cc/160?img=1',
    placedBy: '@diana_prince',
    date: 'March 12, 2021 at 1:25am',
    amountVid: '347.50',
    amountUsd: '$209.11',
  },
];

const renderItem = (item: HistoryItemProps) => (
  <HistoryItem item={item} key={item.id} />
);

const History = () => {
  return (
    <div>
      <S.SectionTitle>Provenance</S.SectionTitle>
      <div>{map(renderItem, data)}</div>
    </div>
  );
};

export default History;
