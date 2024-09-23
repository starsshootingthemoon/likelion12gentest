import React from 'react'

import Logo from '../img/logo-wh.svg'
import cha01 from '../img/cha-foot1.svg'
import cha02 from '../img/cha-foot2.svg'
import arrow from '../img/ft-arrow.svg'

const Footer = () => {
  return (
    <div className='Footer_wrap'>
        <div className='footer_top'>
            <div className='container01'>
                <div className='context01'>
                    <img src={cha01} className='cha'/>
                    <div className='text'>
                        <p className='maintext'>선생님 반가워요!<br/>티솔루션과 첫 만남을 함께 하시겠어요?</p>
                        <div className='arrow_context'>
                            <div className='arrowtext'>티솔루션 바로가기 <img src={arrow} className='arrow'/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container02'>
                <div className='context02'>
                    <img src={cha02} className='cha'/>
                    <div className='text'>
                        <p className='maintext'>지학사의 2022 개정 교육과정<br/>새로운 교과서를 응원해!</p>
                        <div className='arrow_context'>
                            <div className='arrowtext'>한줄평 이벤트 바로가기 <img src={arrow} className='arrow'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='footer_text'>
            <div className='inner'>
                <img src={Logo} className='logo'/>
                <div className='line'/>
                <div className='text'>
                    서울특별시 마포구 신촌로6길 5 (주)지학사 대표이사 : 권준구 사업등록번호 : 105-81-31452 <br/>
                    통신판매업신고 : 제2020-서울마포-0362호 E-mail : WEBMASTER@JIHAK.CO.KR <br/>
                    대표번호 : 02-330-5200 교과서 구입문의 : 02-330-5303 독서평설 정기구독 문의 : 02-3142-2002 <br/>
                    COPYRIGHT©2015 JIHAKSA PUBLISHING CO.LTD. ALL RIGHT RESERVED. <br/>
                    (주)지학사의 콘텐츠를 사전 허가 없이 학교수업 외의 목적으로 이용하는 경우(불법복제,전송,유통 등) 저작권법 제25조에 의해 법적 처벌을 받을 수 있습니다. <br/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer