import React from 'react'
import listImg from '../Kinh/dataImg.json'

const List = ({ handleGlass }) => {
    console.log(listImg)
    return (
        <div className='chooseList'>
            <div className='container mx-auto my-5' style={{ background: '#fff', width: 1200, height: "fit-content" }}>
                <div className='row justify-content-evenly'>
                    {
                        listImg.map((img) => {
                            return (
                                <div key={img.id} className="col-2 cardCustom card text-bg-light m-4" style={{ maxWidth: '10rem'}}>
                                    <div className="card-body d-flex justify-content-center align-items-center" onClick={() => {
                                        handleGlass(img.id)
                                    }}>
                                        <img src={img.url} alt="..." style={{ width: 100 }} />
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default List