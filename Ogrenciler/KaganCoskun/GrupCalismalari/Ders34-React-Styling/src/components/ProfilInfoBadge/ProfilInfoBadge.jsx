import React from 'react'
import styles from "./style.module.css"

const ProfilInfoBadge = ({number,text}) => {
  return (
    <div>
  <h3>{number}</h3>
  <p>{text}</p>
    </div>
  )
}

export default ProfilInfoBadge