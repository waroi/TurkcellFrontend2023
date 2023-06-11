import FooterComponent from "./FooterStyle.js"
import { Container } from "../StyledContainer.js"


const Footer = () => {
    return (
        <FooterComponent>
            <Container>
                <div className="poweredBy">
                    Powered by <a href="https://www.coingecko.com/" rel="noreferrer" target="_blank">CoinGecko</a>
                </div>
                <h3>Created by</h3>
                <div className="cards">
                    <div className="card">
                        <a href="https://github.com/ahmetkanbaz" rel="noreferrer" target="_blank">Ahmet Kanbaz</a>
                    </div>
                    <div className="card">
                        <a href="https://github.com/Egebyte" rel="noreferrer" target="_blank">Ege Kara</a>
                    </div>
                    <div className="card">
                        <a href="https://github.com/SelimEminoglu61" rel="noreferrer" target="_blank">Selim Eminoğlu</a>
                    </div>
                </div>
            </Container>

        </FooterComponent>
    )
}

export default Footer