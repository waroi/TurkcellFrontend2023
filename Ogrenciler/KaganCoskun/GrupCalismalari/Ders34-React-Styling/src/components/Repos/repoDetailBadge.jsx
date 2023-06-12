import React from 'react'
import styles from "./style.module.css"

const RepoDetailBadge = ({number,icon}) => {
  return (
    <div className={styles.repoBadge}>
        <i className={icon}></i>
        <span>{number}</span>
    </div>
  )
}

export default RepoDetailBadge