import React from 'react'

const BaiTapKinh = ({ pick }) => {
  return (
    <div className='modelCard row justify-content-around'>
      <div className='mt-5 col-5'>
        <div className="card position-relative w-50 m-auto" style={{overflow: 'hidden'}}>
          <img src="/images/jpg/model.jpg" className="card-img-top m-auto fixImg" alt="..."/>
          <img className="imgCustom position-absolute" src={pick.url} alt="..." style={{opacity: 0.9}} />
          <div className="position-absolute bottom-0 text-center card-body">
            <h5 className="card-title d-inline-block">{pick.name}</h5>
            <span className='ms-5 fs-4 rounded-pill badge text-bg-info'>{pick.price}$</span>
            <p className="card-text">{pick.desc}</p>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default BaiTapKinh