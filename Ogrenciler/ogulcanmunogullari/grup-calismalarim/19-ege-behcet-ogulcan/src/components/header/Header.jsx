import PropTypes from 'prop-types';
import HeaderComponent from './style';
import { Link } from 'react-router-dom';

const Header = ({ selectRef, selectLang, lang, setPage }) => {
 const langList = {
  "tr": "Haberler",
  "en": "News",
  "de": "Nachricht",
  "ru": "Новости",
 }

 return (
  <HeaderComponent>
   <Link to={`/`} onClick={() => setPage(0)}>
    <h1>E.B.O. {langList[lang]}</h1>
   </Link>
   <select defaultValue="tr" ref={selectRef} onChange={selectLang}>
    <option value="tr">Türkçe</option>
    <option value="en">English</option>
    <option value="de">Deutsch</option>
    <option value="ru">Русский</option>
   </select>
  </HeaderComponent>
 );
};

Header.propTypes = {
 setPage: PropTypes.func.isRequired,
 selectRef: PropTypes.object.isRequired,
 selectLang: PropTypes.func.isRequired,
 lang: PropTypes.string.isRequired,
};

export default Header;
