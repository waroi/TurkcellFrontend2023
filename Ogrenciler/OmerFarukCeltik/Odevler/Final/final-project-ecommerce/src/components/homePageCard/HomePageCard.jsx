import React from 'react'
import styles from "./HomeCard.module.css"

const HomePageCard = ({ item }) => {
  return (
    <div className='col-6 col-lg-3'>
      <div className={`${styles.homeCard} card h-100 border-0  d-flex  justify-content-around`} >
        <img src={item.image} className={`${styles.img}`} alt="..." />
        <div className="card-body d-flex flex-column justify-content-end">
          <h5 className="card-title text-info fs-6 fw-semibold">{item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}</h5>
          <p className={`card-text ${styles.text}`}>
            category: <span className='fw-semibold'>{item.category}</span> 
          </p>
          <p className={`card-text ${styles.text}`}>
            stock: {item.rating.count}  <i className="fa-solid fa-circle text-black opacity-25 px-2 fa-2xs"></i>
            rating: {item.rating.count}
          </p>
         
          <p className={`card-text `}>{item.price} $</p>

        </div>
      </div>
    </div>
  )
}

export default HomePageCard