import SidebarStyle from './sidebarStyle';
import Card from './Card.jsx';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Fetch from '../../models/Fetch';

const Sidebar = ({ lang, setPage }) => {
 const [data, setData] = useState([]);
 useEffect(() => {
  Fetch.getNews(lang, 0).then(
   (data) => {
    setData(data.slice(0, 5));
   }
  )
 }, [lang])
 return (
  <SidebarStyle>
   {
    data.map((item, index) => {
     return (
      <Card setPage={setPage} key={index} item={item} />
     )
    })
   }
  </SidebarStyle>
 )
}

Sidebar.propTypes = {
 lang: PropTypes.string.isRequired,
 setPage: PropTypes.func.isRequired,
}

export default Sidebar