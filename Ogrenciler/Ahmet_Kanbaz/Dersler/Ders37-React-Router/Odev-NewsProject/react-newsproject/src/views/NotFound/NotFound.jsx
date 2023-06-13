import {NotFoundDiv} from './NotFoundStyle'
import {useNavigate} from 'react-router-dom'
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundDiv>
      <h1>404 Not Found</h1>
      <button onClick={() => navigate('/')}>AnaSayfaya Git</button>
    </NotFoundDiv>
  )
}

export default NotFound
