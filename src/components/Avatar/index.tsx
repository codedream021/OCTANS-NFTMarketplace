import React from 'react';
import * as S from './styles';
import { AvatarProps, HashSize } from './share';
import Identicon from 'react-identicons';

const Avatar = ({ name, src,isCreatorPage=false, size = 'sm' }: AvatarProps) => {
 console.log({isCreatorPage});
  return (
    <S.Avatar size={size} isCreatorPage={isCreatorPage}>
      {src ? (
        <img src={src} alt={name} />
      ) : (
        <Identicon string={name} size={HashSize[size]} />
      )}
    </S.Avatar>
  );
};

export default Avatar;
