import React, { useEffect, useState } from 'react'

const AdayCard = ({name,img}) => {
    const [vote, setVote] = useState(0)


    useEffect(() => {
        const localVote = localStorage.getItem(name)
        setVote(Number(localVote))
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])



    vote && localStorage.setItem(name,vote)


    
  return (
   <div className='cardWrap col-6'>
        <div className="card">
    <h2 className='text-center'>{name}: {vote}</h2>
        <img  src={img} className="card-img-top" alt="..." style={{height:"300px",objectFit:"contain"}}/>
        <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <div className='text-center'>
                <button  className="btn btn-primary w-100 my-5" onClick={()=>{setVote(vote+1)}}>Oy Ekle</button>
                <button  className="btn btn-danger opacity-75 w-25" onClick={()=>{setVote(vote-1)}}>Oy Düşür</button>
            </div>
        </div>
        </div>
   </div>
  )
}

export default AdayCard