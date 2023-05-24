import './App.css';
import AdayCard from './components/AdayCard';

function App() {
  return (
    <div className="row">
      <AdayCard name={"KK"}  img={"https://www.milligazete.com.tr/sites/71/uploads/2021/10/09/kilicdaroglu-profil.jpg"}/>
      <AdayCard name={"RTE"} img={"https://scontent.fayt2-1.fna.fbcdn.net/v/t1.18169-9/10383566_10152300208228577_4551687845731818800_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=100&ccb=1-7&_nc_sid=7aed08&_nc_ohc=deWn4wpvaa8AX-63ec0&_nc_ht=scontent.fayt2-1.fna&oh=00_AfBo_bU2kyg2ZvuK3PY_LUmZDW0kgo2wwIVQnQIDu0ilkw&oe=6494E416"}/>
    </div>
  );
}

export default App;
