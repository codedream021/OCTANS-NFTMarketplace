import React from 'react';
import { Asset } from 'types/asset';
import * as S from './styles';

const Creator = ({ asset }: { asset: Asset }) => {
  if (!asset) return null;
  const { name, owner } = asset;
  const { profileImgUrl, user} = owner;

  return (
    <div>
      <S.SectionTitle>Creator</S.SectionTitle>
      <S.CreatorWrapper>
        <img src={profileImgUrl} alt="profile " />
        <div>
          <S.CreatorName>{name}</S.CreatorName>
          <S.CreatorUsername>@{user?.username || ''}</S.CreatorUsername>
        </div>
      </S.CreatorWrapper>
    </div>
  );
};

export default Creator;
