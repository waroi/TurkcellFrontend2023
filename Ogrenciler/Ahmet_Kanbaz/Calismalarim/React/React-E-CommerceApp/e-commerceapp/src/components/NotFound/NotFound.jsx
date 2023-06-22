import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="container d-flex flex-column gap-4 align-items-center py-5">
      <h1>Sayfa Bulunamadı!</h1>
      <p>Ana sayfaya dönmek için lütfen <Link to={'/'} className="fst-italic text-decoration-none">Tıklayınız</Link></p>
    </div>
  )
}

export default NotFound