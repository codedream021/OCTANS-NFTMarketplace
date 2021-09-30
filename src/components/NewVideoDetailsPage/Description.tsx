import React from 'react';
import * as S from './styles';

const Description = (props: any) => {
  const { text } = props;
  return (
    <div>
      <S.SectionTitle>Description</S.SectionTitle>
      <S.DescriptionText>
        <p>
        Possession of this PORTAL entitles you to membership in the TBOA club (theblocksofart.com)

10000x10000
        </p>
      </S.DescriptionText>
    </div>
  );
};

export default Description;
