import {useEffect, useState} from 'react'
const CurrentCity = () => {
  const [location, setLocation] = useState({lat: null, long: null})
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
      
  });
  }, [])
  return (
    <div>
      {/* {location} */}
    </div>
  )
}

export default CurrentCity
