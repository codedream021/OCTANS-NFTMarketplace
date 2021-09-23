import React from 'react';
import * as S from './styles';
import Button from 'components/UI/Button';
import Swiper from 'react-id-swiper';
import { paramsWithMaxAndMin } from 'helpers/consts';

const params = {
  slidesPerView: 1,
  loop: true,
  speed: 2500,
  observer: true,
  observeParents: true,
  shouldSwiperUpdate: true,
  rebuildOnUpdate: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};
const headers = [
  {
    id:1,
    title: 'First Title Lorem ipsum text text',
    description: 'First Lorem dolor sit amet, eruditi maluisset cotidieque est ea eam dictas fastidii ex mel modus lorem.'
  },
  {
    id:2,
    title: 'Second Title Lorem ipsum text text',
    description: 'Second Lorem dolor sit amet, eruditi maluisset cotidieque est ea eam dictas fastidii ex mel modus lorem.'
  },
  {
    id:3,
    title: 'Third Title Lorem ipsum text text',
    description: 'Third Lorem dolor sit amet, eruditi maluisset cotidieque est ea eam dictas fastidii ex mel modus lorem.'
  }
];
const BannerSection = () => {
  return (
    <S.BannerSectionWrapper>
      <div className="crsl--content">
        <Swiper {...params}>
          {headers?.map((elem:any) => {
            return (
              <div key={elem.id}>
                <div className="crsl--text">
                  <div className="crsl__hd">
                    {elem.title}
                  </div>
                  <p className="crsl--para">
                    <div>
                      {elem.description}
                    </div>
                  </p>
                  <Button size={'sm'} theme={'gradient'} className="crsl__btn">
                    View Bids
                  </Button>
                </div>{' '}
              </div>
            );
          })}
        </Swiper>
      </div>
    </S.BannerSectionWrapper>
  );
};

export default BannerSection;
