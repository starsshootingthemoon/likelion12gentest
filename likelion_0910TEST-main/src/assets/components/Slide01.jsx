import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import '../scss/setting/swiper.scss'


import img01 from '../../img/mpr-slimg1.png'
import img02 from '../../img/mpr-slimg2.png'
import img03 from '../../img/mpr-slimg3.png'
import img04 from '../../img/mpr-slimg4.png'

import textbook01 from '../../img/bg_mvsimg1.png'
import textbook02 from '../../img/bg_mvsimg2.png'
import textbook03 from '../../img/bg_mvsimg3.png'
import textbook04 from '../../img/bg_mvsimg4.png'
import textbook05 from '../../img/bg_mvsimg5.png'
import textbook06 from '../../img/bg_mvsimg6.png'

import cha01 from '../../img/img_mvcha1.png'
import cha02 from '../../img/img_mvcha2.png'
import cha03 from '../../img/img_mvcha3.png'
import cha04 from '../../img/img_mvcha4.png'
import cha05 from '../../img/img_mvcha5.png'
import cha06 from '../../img/img_mvcha6.png'

const Slide01 = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 슬라이드 인덱스 저장

  const eventTexts = [
    '선생님! 아직 티솔루션 회원이 아니신가요?\n신규 회원가입 이벤트🎁',
    '마음에 드는 표지 선택하고 상품 받아가세요!\n표지 좋아요 이벤트💗',
    '여기에 들어가는 초성은 무엇일까요?\n빈칸 퀴즈 이벤트💡',
    '2022 개정 지학사 교과서를 응원해 주세요!\n응원 이벤트🍀',
  ];  

  // 이미지 배열
  const images = [img01, img02, img03, img04];

  const getClipClass = (index) => {
    switch (index) {
      case 0:
        return 'quarter-circle bottom-left'; // 왼쪽 하단 1/4 원
      case 1:
        return 'quarter-circle bottom-right'; // 오른쪽 하단 1/4 원
      case 2:
        return 'quarter-circle top-left'; // 왼쪽 상단 1/4 원
      case 3:
        return 'quarter-circle top-right'; // 오른쪽 상단 1/4 원
      default:
        return 'quarter-circle top-left'; // 기본값은 왼쪽 상단
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', () => {
        setActiveIndex(swiperRef.current.swiper.realIndex); // 현재 인덱스를 저장
      });
    }
  }, []);

  return (
    <div className='Slide01_warp'>
      <div className='inner'>
        <div className='main_text'>
          <div className='context'>2022 개정<br />교육과정 교과서</div>
          <p>지학사 교과서가 수업에 필요한 모든 것을 지원합니다.</p>
        </div>

        <div className='mini_tap'>
          <div className='mini_nav'>
            <div className='event'>EVENT</div>
            <div className='slide'>
              <div className='content01' />
              <div className='content02' />
              <div className='content03' />
              <div className='content04' />
            </div>
          </div>

          <div className='mini_slide'>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              ref={swiperRef}
            >
              {eventTexts.map((text, index) => (
                <SwiperSlide key={index}>
                  <p className='event_mms'>
                    {text} {/* 각 슬라이드에 맞는 텍스트를 표시 */}
                  </p>
                  <div className={`slide-background ${getClipClass(index === activeIndex ? index : 0)}`}>
                    <img src={images[index]} alt={`이벤트 이미지 ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className='slide_main'>

            <div className='main_slide'>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay:4000, disableOnInteraction: false }}
                loop={true}
            >
                <SwiperSlide>
                    <img src={cha01} className='cha2' alt='캐릭터 이미지 1' />
                <img src={textbook01} className='textbook' alt='교과서 이미지 1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cha02} className='cha1' alt='캐릭터 이미지 2' />
                <img src={textbook02} className='textbook' alt='교과서 이미지 2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cha03} className='cha1' alt='캐릭터 이미지 3' />
                <img src={textbook03} className='textbook' alt='교과서 이미지 3' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cha04} className='cha1' alt='캐릭터 이미지 4' />
                <img src={textbook04} className='textbook' alt='교과서 이미지 4' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cha05} className='cha' alt='캐릭터 이미지 5' />
                <img src={textbook05} className='textbook' alt='교과서 이미지 5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cha06} className='cha' alt='캐릭터 이미지 6' />
                <img src={textbook06} className='textbook' alt='교과서 이미지 6' />
                </SwiperSlide>
            </Swiper>
            </div>

        </div>


      </div>
    </div>
  )
}

export default Slide01
