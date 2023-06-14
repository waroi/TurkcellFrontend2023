import { HeaderComponent } from "./HeaderStyle"

const Header = () => {
  return (
    <HeaderComponent>
      {/* <div className="row"> */}

      <img className="img-fluid" src="https://cdn.discordapp.com/attachments/1089995517720789114/1118240177404510228/chuck_norris.png" alt="" />
      {/* </div> */}
      <h1>Chuck Norris Jokes</h1>
    </HeaderComponent >
  )
}

export default Header