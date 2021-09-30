import React from 'react';
import * as S from './styles';

const Tags = ({ data }: { data: string[] }) => {
  return (
    <div>
      <S.SectionTitle>Tags</S.SectionTitle>
      <S.Tags>
        {data.map((tag, index) => (
          <S.Tag key={index}>{tag}</S.Tag>
        ))}
      </S.Tags>
    </div>
  );
};

export default Tags;
