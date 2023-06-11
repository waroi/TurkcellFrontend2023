import { HeaderComponent } from "./HeaderStyle.js"
import { Container } from "../StyledContainer.js"
import { Link } from "react-router-dom"
import {useTheme} from '../../context/ThemeContext.jsx'

const Header = () => {
    const {theme, setTheme} = useTheme()

    return (
        <HeaderComponent className={`${theme}`} theme={theme}>
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
                        <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>Tema</button>
                    </div>
                </div>
            </Container>
        </HeaderComponent >
    )
}

export default Header