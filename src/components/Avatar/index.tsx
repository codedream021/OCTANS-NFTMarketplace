import React from 'react';
import * as S from './styles';
import { AvatarProps, HashSize } from './share';
import Identicon from 'react-identicons';

const whitelists = [
  '0x10ec5e46CCC0E01471d7BfCFD98BdA89a269d541'.substring(0, 7),
  '0xB62db4722B7D67Fe97104417bf79B5BB81DcEFE2'.substring(0, 7),
  'Invoker'
];

const Avatar = ({ name, src, size = 'sm' }: AvatarProps) => {
  return (
    <S.Avatar size={size}>
      {src && whitelists.includes(name.substring(0, 7)) ? (
        <img src={src} alt={name} />
      ) : (
        <Identicon string={name} size={HashSize[size]} />
      )}
    </S.Avatar>
  );
};

export default Avatar;
