import React from 'react';

import sub01 from '../../img/mtab-cheyook.png'
import sub02 from '../../img/mtab-eumak.png'
import sub03 from '../../img/mtab-gwahak.png'
import sub04 from '../../img/mtab-misul.png'
import sub05 from '../../img/mtab-sahui.png'
import sub06 from '../../img/mtab-suhak.png'

import book31 from '../../img/mthunb-gwahak31-pr.png'
import book32 from '../../img/mthunb-gwahak32-pr.png'
import book33 from '../../img/mthunb-eumak3-pr.png'
import book34 from '../../img/mthunb-misul3-pr.png'
import book35 from '../../img/mthunb-sahui31-pr.png'
import book36 from '../../img/mthunb-sahui32-pr.png'
import book37 from '../../img/mthunb-suhak31-pr.png'
import book38 from '../../img/mthunb-suhak32-pr.png'
import book39 from '../../img/mthunb-cheyook3-pr.png'

const Slide02 = () => {
  const subjects = [
    { name: '수학', image: sub01 },
    { name: '사회', image: sub02 },
    { name: '과학', image: sub03 },
    { name: '음악', image: sub04 },
    { name: '미술', image: sub05 },
    { name: '체육', image: sub06 }
  ];  
  
  const items = [
    { type: 'yellow' },
    { type: 'image', image: book37, alt: '수학 3-1' },
    { type: 'image', image: book38, alt: '수학 3-2' },
    { type: 'yellow' },
    { type: 'image', image: book35, alt: '사회 3-1' },
    { type: 'image', image: book36, alt: '사회 3-2' },
    { type: 'yellow' },
    { type: 'yellow' },
  
    { type: 'image', image: book31, alt: '과학 3-1' },
    { type: 'image', image: book32, alt: '과학 3-2' },
    { type: 'yellow' },
    { type: 'image', image: book33, alt: '미술 3-1' },
    { type: 'image', image: book34, alt: '미술 3-2' },
    { type: 'yellow' },
    { type: 'image', image: book39, alt: '체육 3' },
    { type: 'yellow' }
  ];

  return (
    <div className="Slide02_wrap">

        <div className="header">
          <div className="grade-label">초등 3학년 교과서</div>
          <h1 className="main-title">선생님과 학생을 생각하는 <br/> 지학사 교과서</h1>
          
          <div className='slide02_top'>
          <p className="description">
            가르치는 선생님과, 배우는 학생의 마음을 모두 생각한 2022 개정 교육과정 교과서.<br/>
            항상 학교 현장을 고민하는 지학사 교과서가<br/>
            그동안의 경험을 모아 더 나은 수업을 도와드립니다.
          </p>
          <div className="category-buttons">
          {subjects.map((subject, index) => (
            <button key={index} className="category-btn">
              <img src={subject.image} alt={`${subject.name} 이미지`} className="category-image" />
              {subject.name}
            </button>
          ))}
          </div>
        </div>
        
      </div>


      <div className="image-grid">
      {items.map((item, index) => (
        <div key={index} className={item.type === 'yellow' ? 'yellow-box' : 'image-item'}>
          {item.type === 'image' && (
            <img src={item.image} alt={item.alt} className="textbook-image" />
          )}
        </div>
      ))}
    </div>

    </div>
  );
};

export default Slide02;
