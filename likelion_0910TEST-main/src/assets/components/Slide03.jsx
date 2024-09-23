import React from 'react';

import sub01 from '../../img/mtab-cheyook.png'
import sub02 from '../../img/mtab-eumak.png'
import sub03 from '../../img/mtab-gwahak.png'
import sub04 from '../../img/mtab-misul.png'
import sub05 from '../../img/mtab-sahui.png'
import sub06 from '../../img/mtab-suhak.png'

import book31 from '../../img/mthunb-gwahak41-pr.png'
import book32 from '../../img/mthunb-gwahak42-pr.png'
import book33 from '../../img/mthunb-eumak4-pr.png'
import book34 from '../../img/mthunb-misul4-pr.png'
import book35 from '../../img/mthunb-sahui41-pr.png'
import book36 from '../../img/mthunb-sahui42-pr.png'
import book37 from '../../img/mthunb-suhak41-pr.png'
import book38 from '../../img/mthunb-suhak42-pr.png'
import book39 from '../../img/mthunb-cheyook4-pr.png'

const Slide03 = () => {
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
    <div className="Slide03_wrap">

        <div className="header">
          <div className="grade-label">초등 4학년 교과서</div>
          <h1 className="main-title">한 단계 더 성장하는 <br/>아이들과 선생님</h1>
          
          <div className='slide02_top'>
          <div className="category-buttons">
          {subjects.map((subject, index) => (
            <button key={index} className="category-btn">
              <img src={subject.image} alt={`${subject.name} 이미지`} className="category-image" />
              {subject.name}
            </button>
          ))}
          </div>
          <p className="description">
            수업의 과정은 즐겁고, 성취하는 보람찬 2022 개정 교육과정 교과서.<br/>
            내용의 깊이는 더하고 과정은 즐겁게 구성한<br/>
            지학사 교과서와 함께 새로운 수업을 경험해 보세요.
          </p>
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

export default Slide03;
