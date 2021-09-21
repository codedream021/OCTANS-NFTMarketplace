import React from 'react';
import * as S from './styles';
import Button from 'components/UI/Button';

const BannerSection = () => {
  return (
    <S.BannerSectionWrapper>
      <div className="crsl--content">
        <div className="crsl--text">
          <div className="crsl__hd">Header</div>
          <p className="crsl--para">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </p>
          <Button size={'sm'} theme={'gradient'} className="crsl__btn">
            View Bids
          </Button>
        </div>
      </div>
    </S.BannerSectionWrapper>
  );
};

export default BannerSection;
