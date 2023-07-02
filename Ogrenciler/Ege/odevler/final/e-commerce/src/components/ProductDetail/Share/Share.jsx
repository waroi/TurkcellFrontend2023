import StyledShare from "./StyledShare"

const Share = () => {
    return (
        <StyledShare>
            <ul className="d-flex gap-3">
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
            </ul>
        </StyledShare>
    )
}

export default Share