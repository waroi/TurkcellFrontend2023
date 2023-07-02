import KnowledgeCard from "./KnowledgeCard/KnowledgeCard"
import StyledTitle from "../../styledComponents/StyledTitle"
import ButtonOutline from "../../styledComponents/ButtonOutline"
import caretRight from "../../assets/Caret_Right_Dark.svg"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import knowledgeImgOne from "../../assets/Knowledge_One.png"
import knowledgeImgTwo from "../../assets/Knowledge_Two.png"
import knowledgeImgThree from "../../assets/Knowledge_Three.png"
const KnowledgeList = () => {
    const user = useSelector(state => state.user.user)
    const knowledgeInfos = [
        {
            title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae expedita delectus velit, dicta itaque voluptate sunt sit molestiae, veniam ut laboriosam reiciendis eveniet eligendi veritatis animi ex et sequi eaque odit, quae recusandae pariatur est corrupti. Totam molestias enim consequatur. Laudantium impedit corrupti aliquid tenetur alias. Vel, nulla? Inventore, sint?",
            image: knowledgeImgOne,
            tag: "Pet Knowledge"
        },
        {
            title: "Dog Diet You Need To Know",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae expedita delectus velit, dicta itaque voluptate sunt sit molestiae, veniam ut laboriosam reiciendis eveniet eligendi veritatis animi ex et sequi eaque odit, quae recusandae pariatur est corrupti. Totam molestias enim consequatur. Laudantium impedit corrupti aliquid tenetur alias. Vel, nulla? Inventore, sint?",
            image: knowledgeImgTwo,
            tag: "Pet Knowledge"
        },
        {
            title: "Why Dogs bite and Destroy Furniture and How to Prevent It Effectively",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae expedita delectus velit, dicta itaque voluptate sunt sit molestiae, veniam ut laboriosam reiciendis eveniet eligendi veritatis animi ex et sequi eaque odit, quae recusandae pariatur est corrupti. Totam molestias enim consequatur. Laudantium impedit corrupti aliquid tenetur alias. Vel, nulla? Inventore, sint?",
            image: knowledgeImgThree,
            tag: "Pet Knowledge"
        },
    ]


    return (
        <div className="container my-3">
            <StyledTitle>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>Do you already know ?</h4>
                        <h3>Useful Product Knowledge</h3>
                    </div>
                    <Link to={user ? "/products" : "/login"} >
                        <ButtonOutline className="d-none d-lg-block">View More <img src={caretRight} alt="caretRights" /></ButtonOutline>
                    </Link>
                </div>
            </StyledTitle>

            <div className="d-flex flex-column flex-lg-row gap-3">
                {
                    knowledgeInfos.map((knowledgeInfo, i) => <KnowledgeCard key={i} info={knowledgeInfo} />)
                }
            </div>
            <Link to={user ? "/products" : "/login"}>
                <ButtonOutline className="d-lg-none w-100">View More <img src={caretRight} alt="caretRights" /></ButtonOutline>
            </Link>
        </div>
    )
}

export default KnowledgeList