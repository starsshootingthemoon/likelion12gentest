import React from 'react'
import Logo from '../img/logo.svg'

const Nav = () => {
  return (
    <div className='Nav_wrap'>
      <div className='inner'>
        <img src={Logo} className='logo'/>
        <div className='nav_container'>
            <div className='nav_text'>초등 3학년 교과서</div>
            <div className='nav_text'>초등 4학년 교과서</div>
        </div>
        <div className='nav_container1'>
            <div className='nav_text'>티솔루션</div>
            <div className='left'>
                <div className='nav_text'>이벤트</div>
                <div className='box'>EVENT</div>
            </div>
        </div>
      </div>
      <div className='underline'/>
    </div>
  )
}

export default Nav