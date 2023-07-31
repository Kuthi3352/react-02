import React, { useState } from 'react'
import BaiTapKinh from './Kinh/BaiTapKinh'
import List from './List/List'
import glassList from './Kinh/dataGlasses.json'


const Glasses = () => {
  console.log(glassList)
  let [pick, setGlass] = useState(glassList[0])
  let handleGlass = (id) => {
    setGlass(glassList[id-1])
  } 
  return (
    <div className='position-relative'>
      <div className='overlay position-absolute' style={{ background: 'rgba(0,0,0,.5)', width: '100vw', height: '1200px', zIndex: 2 }}>
        <div className='text-light'>

          <BaiTapKinh pick={ pick }/>
          <List handleGlass = {handleGlass}/>
        </div>
      </div>
      <img className='position-relative' src="/images/jpg/background.jpg" alt="..." style={{ width: '100vw', height: '1200px' }} />

    </div>
  )
}

export default Glasses