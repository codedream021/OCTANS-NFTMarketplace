import React from 'react'
import * as S from './styles';
import { ReactComponent as Mail } from '../../Header/assets/mail.svg';

function LearnMore() {
    return (
        <S.Root>
            <S.Title>Learn More</S.Title>
            <S.List>
               <li>Read the announcement</li>
               <li>Read the SuperRare Network docs</li>
               <li>Join the community Discord</li>
               <li>Stay updated on the $RARE token:</li>
            </S.List>
            <S.Newsletter>
                <input type="text" placeholder="Enter Email " />
                <span>
                  <Mail />
                </span>
              </S.Newsletter>
        </S.Root>
    )
}

export default LearnMore
