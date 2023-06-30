import KnowledgeCard from "./KnowledgeCard/KnowledgeCard"
import StyledKnowledgeList from "./StyledKnowledgeList"
import StyledTitle from "../../styledComponents/StyledTitle"
import ButtonOutline from "../../styledComponents/ButtonOutline"
import caretRight from "../../assets/Caret_Right_Dark.svg"

const KnowledgeList = () => {

    const knowledgeInfos = [
        {
            title: "What is a T-Shirt?",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae expedita delectus velit, dicta itaque voluptate sunt sit molestiae, veniam ut laboriosam reiciendis eveniet eligendi veritatis animi ex et sequi eaque odit, quae recusandae pariatur est corrupti. Totam molestias enim consequatur. Laudantium impedit corrupti aliquid tenetur alias. Vel, nulla? Inventore, sint?",
            image: "https://picsum.photos/id/27/200/300",
            tag: {
                text: "Wardrobe Knowledge",
                background: "red"
            }
        },
        {
            title: "What is a Necklace?",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae expedita delectus velit, dicta itaque voluptate sunt sit molestiae, veniam ut laboriosam reiciendis eveniet eligendi veritatis animi ex et sequi eaque odit, quae recusandae pariatur est corrupti. Totam molestias enim consequatur. Laudantium impedit corrupti aliquid tenetur alias. Vel, nulla? Inventore, sint?",
            image: "https://picsum.photos/id/27/200/300",
            tag: {
                text: "Jewelery Knowledge",
                background: "green"
            }
        },
        {
            title: "Do you know about SSD",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae expedita delectus velit, dicta itaque voluptate sunt sit molestiae, veniam ut laboriosam reiciendis eveniet eligendi veritatis animi ex et sequi eaque odit, quae recusandae pariatur est corrupti. Totam molestias enim consequatur. Laudantium impedit corrupti aliquid tenetur alias. Vel, nulla? Inventore, sint?",
            image: "https://picsum.photos/id/27/200/300",
            tag: {
                text: "Electronics Knowledge",
                background: "blue"
            }
        },
    ]


    return (
        <StyledKnowledgeList className="container my-3">
            <StyledTitle>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>Do you already know ?</h4>
                        <h3>Useful Product Knowledge</h3>
                    </div>
                    <ButtonOutline className="d-none d-lg-block">View More <img src={caretRight} alt="caretRights" /></ButtonOutline>
                </div>
            </StyledTitle>

            <div className="d-flex flex-column flex-lg-row gap-3">
                {
                    knowledgeInfos.map((knowledgeInfo, i) => <KnowledgeCard key={i} info={knowledgeInfo} />)
                }
            </div>
            <ButtonOutline className="d-lg-none w-100">View More <img src={caretRight} alt="caretRights" /></ButtonOutline>
        </StyledKnowledgeList>
    )
}

export default KnowledgeList