import React from 'react';
import * as S from './styles';
import Button from 'components/UI/Button';
import Swiper from 'react-id-swiper';

const params = {
  slidesPerView: 1,
  loop: true,
  speed: 3500,
  spaceBetween: 500,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    220: {
      slidesPerView: 1,
    },
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
