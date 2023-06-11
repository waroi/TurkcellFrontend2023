import { HeaderComponent } from "./HeaderStyle.js"
import { Container } from "../StyledContainer.js"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <HeaderComponent>
            <Container>
                <div className="wrapper">
                    <div className="logo">
                        <Link to={`/`} >
                            <h1>AES Coins</h1>
                        </Link>
                    </div>
                    <div className="menu">

                        <Link to={`*`} >
                            Hakkımızda
                        </Link>
                        <Link to={`*`} >
                            Bize Ulaşın
                        </Link>
                    </div>
                </div>
            </Container>
        </HeaderComponent >
    )
}

export default Header