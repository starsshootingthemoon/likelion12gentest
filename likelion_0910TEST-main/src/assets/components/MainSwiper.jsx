import React from 'react';

// Swiper 및 필요한 모듈 불러오기
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

// 이미지 불러오기
import character from '../../img/character.png';  // 위 캐릭터 이미지
import textbook01 from '../../img/bg_mvsimg1.png';  // 교과서 이미지 (예시)
import textbook02 from '../../img/bg_mvsimg2.png';
import textbook03 from '../../img/bg_mvsimg3.png';
import cha01 from '../../img/img_mvcha1.png';
import cha02 from '../../img/img_mvcha2.png';
import cha03 from '../../img/img_mvcha3.png';

const MainSwiper = () => {
  const swiperStyle = {
    position: "relative",
    width: "1280px",
    height: "800px",
    borderRadius: "20px",
    overflow: "hidden",
    transition: "border-radius 1s ease-in-out",  // 애니메이션 추가
  };

  // 스타일에 애니메이션 효과 적용 (둥글어졌다가 펴지는 효과)
  const animateRadius = {
    borderRadius: "0px",
    animation: "borderAnimation 3s infinite",
  };

  // Keyframes for border-radius animation
  const keyframes = `
    @keyframes borderAnimation {
      0%, 100% {
        border-radius: 20px;
      }
      50% {
        border-radius: 0px;
      }
    }
  `;

  return (
    <div>
      <style>{keyframes}</style> {/* 애니메이션 효과 적용 */}
      <Swiper
        style={{ ...swiperStyle, ...animateRadius }} // 둥근 모서리 애니메이션 스타일 적용
        modules={[Autoplay]}  // Autoplay 모듈 활성화
        autoplay={{
          delay: 3000,  // 3초에 한 번씩 슬라이드 전환
          disableOnInteraction: false,
        }}
        loop={true}  // 무한 루프
      >
        {/* 각 슬라이드 */}
        <SwiperSlide>
          <div className="main_slide">
            <img src={cha01} className="character" alt="Character 1" />
            <img src={textbook01} className="textbook" alt="Textbook 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main_slide">
            <img src={cha02} className="character" alt="Character 2" />
            <img src={textbook02} className="textbook" alt="Textbook 2" />
          </div>  
        </SwiperSlide>
        <SwiperSlide>
          <div className="main_slide">
            <img src={cha03} className="character" alt="Character 3" />
            <img src={textbook03} className="textbook" alt="Textbook 3" />
          </div>  
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainSwiper;
