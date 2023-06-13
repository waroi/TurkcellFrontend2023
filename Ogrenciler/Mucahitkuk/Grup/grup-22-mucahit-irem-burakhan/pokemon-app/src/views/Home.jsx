import { useNavigate } from 'react-router-dom';
import { CustomButton } from './styledHome';


const Home = () => {
  const navigate = useNavigate();

  const handleKeyDown = () => {
    navigate('/Pokemonpage');
  };
    return (
    <div>
      <p style={{color: "yellow"}}>My Pokemon Collection Ultimate</p>
      <h1>Disc Inserted</h1>
      <h2>Tab And Press any key to start</h2>
      <CustomButton onKeyDownCapture={handleKeyDown}>
        <img src='https://cdn.discordapp.com/attachments/1089996153845719110/1118254571106615366/image_8.png'></img>
      </CustomButton>
    </div>
  )
}

export default Home