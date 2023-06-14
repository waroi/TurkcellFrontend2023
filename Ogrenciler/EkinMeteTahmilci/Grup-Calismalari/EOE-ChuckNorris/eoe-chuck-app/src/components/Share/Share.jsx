import { Socials, ShareArea } from "./ShareStyle"

const Share = () => {
    return (
        <ShareArea>
            <Socials>
                <li><i className="bi bi-twitter"></i></li>
                <li><i className="bi bi-facebook"></i></li>
                <li><i className="bi bi-instagram"></i></li>
            </Socials>
            <p>Share this joke on social media...</p>
        </ShareArea>
    )
}

export default Share