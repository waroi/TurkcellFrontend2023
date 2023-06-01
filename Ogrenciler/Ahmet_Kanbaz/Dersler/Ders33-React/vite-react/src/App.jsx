import './App.css'
import Name from './components/Name'
import ListItemStudents from './components/ListItemStudents'
import {useState} from 'react'

function App() {
  const [name, setName] = useState('Ahmet');
  const students = ['Varol', 'Ahmet', 'Burak',  'Fatma', 'Ayşe'];
  const teams = [
    {
      id: 1,
      name: 'Beşiktaş',
      color1: 'black',
      color2: 'white',
      w: '250px'
    },
    {
      id: 2,
      name: 'Galatasaray',
      color1:'red',
      color2: 'yellow',
      w: '250px'
    },
    {
      id: 3,
      name: 'Fenerbahçe',
      color1: 'blue',
      color2: 'yellow',
      w: '250px'
    }
  ];
  return (
    <>
      <Name isim = {name}/>
      <button onClick={() => {
        name === 'Ahmet' ? setName('Varol') : setName('Ahmet');
      }}>Change Name</button>
      <hr />
      <ul>
        {
          students.map((student, i) => <ListItemStudents key={i} student = {student} index = {i}/>)
        }
      </ul>
      <hr />
      {
        teams.map((team) => {
          return (
            <li key={team.id} style={{
              listStyle: 'none',
              background: team.color1,
              color: team.color2,
              width: team.w,
              marginTop: '.4rem'
            }}>
              {team.name}
            </li>
          )
        })
      }
    </>
  )
}

export default App
