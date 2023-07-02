import { FooterComponent, FooterTop, FooterBottom } from "./FooterStyle"
import { Container } from "../../ContainerStyle"
const Footer = () => {
    return (
        <FooterComponent>
            <Container>
                <FooterTop>Created by EoE</FooterTop>
                <FooterBottom>
                    <h3>2023 Chuck Norris Şaka Generator</h3>
                    <img src="https://cdn.discordapp.com/attachments/1089995517720789114/1118240531932250142/chuck-norris-approved.png" alt="chuck_norris_approved" />
                </FooterBottom>
            </Container>
        </FooterComponent>
    )
}

export default Footer