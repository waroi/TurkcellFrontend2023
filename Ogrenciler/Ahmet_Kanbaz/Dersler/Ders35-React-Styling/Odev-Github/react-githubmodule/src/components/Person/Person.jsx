import './person.css'
const Person = () => {
  return (
    <div>
      <div className="personInfo">
        <img src="https://avatars.githubusercontent.com/u/3173292?v=4" alt="userLogo"  width='400px'/>
        <div className='info'>
          <h4>Kullanıcı Adı ve Soyadı</h4>
          <h6>Username</h6>
          <div>
            <div>
              <ul>
                <li>Location: </li>
                <li>Company: </li>
                <li>Website: </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Bio: </li>
                <li>Email: </li>
                <li><button href="#" disabled>Waroi</button></li> {/*İçerik null ise default bir değer verilerek disabled yapılabilir. */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li>Followers: 0</li>
          <li>Following: 0</li>
          <li>Repos: 0</li>
        </ul>
      </div>
      <div>
        <span>Github Oluşturma Zamanı</span>
        <span>Son Güncelleme Zamanı</span>
      </div>
      <div>
        <h3>Repo Adı</h3>
        <p>Repo Açıklaması</p>
        <p>Repo Oluşturma Zamanı</p>
        <p>Repo Güncelleme Zamanı</p>
      </div>
    </div>
  )
}

export default Person
