import PropTypes from 'prop-types'

import FooterComponent from "./style"
const Footer = ({ lang }) => {

 const AUTHORS = [
  {
   "username": "Ege",
   "github": "https://github.com/Egebyte",
   "img": "https://avatars.githubusercontent.com/u/83390653?v=4"
  },
  {
   "username": "Behçet",
   "github": "https://github.com/Behcetyildirim",
   "img": "https://avatars.githubusercontent.com/u/49375975?v=4"
  },
  {
   "username": "Oğulcan",
   "github": "https://github.com/ogulcanmunogullari",
   "img": "https://avatars.githubusercontent.com/u/89843337?v=4"
  }
 ]
 const langList = {
  "tr": "2023'te E.B.O. tarafından Sevgiyle Oluşturuldu",
  "en": "Created by E.B.O. with Love at 2023",
  "de": "Erstellt von E.B.O. mit Liebe im Jahr 2023",
  "ru": "Создано E.B.O. с любовью в 2023 году"
 }
 return (
  <FooterComponent>
   <div className="container">
    <div className='created'>{langList[lang]}</div>
    <div className='cards'>
     {
      AUTHORS.map((author, index) => <a key={index} href={author.github} target="_blank" rel="noreferrer" className='card'>
       <img src={author.img} alt={author.username} />
      </a>)
     }
    </div>
   </div>
  </FooterComponent>
 )
}

Footer.propTypes = {
 lang: PropTypes.string.isRequired,
}

export default Footer