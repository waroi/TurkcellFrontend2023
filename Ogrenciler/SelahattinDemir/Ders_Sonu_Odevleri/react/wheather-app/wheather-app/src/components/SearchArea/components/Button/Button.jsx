/* eslint-disable react/prop-types */


const Button = ({handleFetchWeather}) => {
  return (
    <div>
      <button onClick={handleFetchWeather} type="submit">Search</button>
    </div>
  )
}

export default Button