import React from 'react'
import { useParams } from 'react-router-dom'
const PArametreView = () => {
  const {id} = useParams(); 
  return (
    <div>PArametreView</div>
  )
}

export default PArametreView