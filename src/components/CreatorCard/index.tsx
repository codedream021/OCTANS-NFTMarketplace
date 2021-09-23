import Avatar from 'components/Avatar';
import React from 'react';
import * as S from './styles';
import { Creator } from 'types/creators';

const CreatorCard = ({ creator }: { creator: Creator }) => {
  const { id, user, profileImgUrl, address } = creator;
  const { name, username } = user;
  return (
    <S.Card to={`/creators/${id}`}>
      <S.Bg>
        <img src="/images/creator.png" alt="" />
      </S.Bg>
      <S.Content>
        <Avatar size="sm" name={address} isCreatorPage={true} src={profileImgUrl} />
        <S.Name>{name || "Name"}</S.Name>
        <S.Nickname>@{username} </S.Nickname>
        <S.Description>
          Ut quo agam sonet debitis. Nec putent officiis ut. No alia legere
          habemus qui. Summo intellegat ad mei, ut sea munere laoreet indoctum.
        </S.Description>
      </S.Content>
      <S.CardFooter>
          <S.Followers>
            <S.Number>1259</S.Number>
            <span>
              Followers
            </span>
          </S.Followers>
          <S.FollowButton>
            Follow
          </S.FollowButton>
        </S.CardFooter>
    </S.Card>
  );
};

export default CreatorCard;
