import { HeaderComponent } from "./HeaderStyle"

const Header = () => {
  return (
    <HeaderComponent>
      <div className="row">
        <div className="col-8 offset-2">
          <img src="https://cdn.discordapp.com/attachments/1089995517720789114/1118240177404510228/chuck_norris.png" alt="" />
        </div>
      </div>
      <h1>Chuck Norris</h1>
    </HeaderComponent>
  )
}

export default Header