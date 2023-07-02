/* eslint-disable react/prop-types */

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({fontSize, starCount}) => {
  const maxStarsCount = 5
  const allStarsCount = Math.floor(starCount)
  const halfStarsCount = starCount % 1 !== 0
  const emptyStarsCount = maxStarsCount - allStarsCount - (halfStarsCount && 1)

  const renderStars = () => {
    const tempStars = []

    for (let i = 0; i < allStarsCount; i++) {
      tempStars.push(<BsStarFill key={i} color='gold' size={fontSize}/>)
    }

    if(halfStarsCount) {
      tempStars.push(<BsStarHalf key={allStarsCount} color='gold' size={fontSize}/>)
    }

    for (let i = 0; i < emptyStarsCount; i++) {
      tempStars.push(<BsStar  key={allStarsCount + (halfStarsCount && 1) + i} color='gold' size={fontSize}/>)
    }
    return tempStars
  }
  return (
    <div className={`d-flex`}>{renderStars()}</div>
  )
}

export default Stars