import KnowledgeCard from "./KnowledgeCard";
import { Knowledge } from "../Style/styled-knowledge";
import { FaAngleRight } from "react-icons/fa";
import { ViewMoreButton } from "../Style/styled-viewmore";

const KnowledgeList = () => {
  const knowledgeInfos = [
    {
      title: "How Do We Produce Our T-Shirts?",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae expedita delectus velit, dicta itaque voluptate sunt sit molestiae, veniam ut laboriosam reiciendis eveniet eligendi veritatis animi ex et sequi eaque odit, quae recusandae pariatur est corrupti. Totam molestias enim consequatur. Laudantium impedit corrupti aliquid tenetur alias. Vel, nulla? Inventore, sint?",
      image:
        "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400",
      tag: {
        text: "Wardrobe Knowledge",
        background: "#0078CD",
      },
    },
    {
      title: "How Do We Produce Our Jewerly?",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae expedita delectus velit, dicta itaque voluptate sunt sit molestiae, veniam ut laboriosam reiciendis eveniet eligendi veritatis animi ex et sequi eaque odit, quae recusandae pariatur est corrupti. Totam molestias enim consequatur. Laudantium impedit corrupti aliquid tenetur alias. Vel, nulla? Inventore, sint?",
      image:
        "https://images.pexels.com/photos/9428788/pexels-photo-9428788.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: {
        text: "Jewelery Knowledge",
        background: "#0078CD",
      },
    },
    {
      title: "About Our Electronic Products",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae expedita delectus velit, dicta itaque voluptate sunt sit molestiae, veniam ut laboriosam reiciendis eveniet eligendi veritatis animi ex et sequi eaque odit, quae recusandae pariatur est corrupti. Totam molestias enim consequatur. Laudantium impedit corrupti aliquid tenetur alias. Vel, nulla? Inventore, sint?",
      image:
        "https://images.pexels.com/photos/13595074/pexels-photo-13595074.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: {
        text: "Electronics Knowledge",
        background: "#0078CD",
      },
    },
  ];

  return (
    <Knowledge className="container mt-5">
      <title>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4>Do you already know ?</h4>
            <h3>Useful Product Knowledge</h3>
          </div>
          <ViewMoreButton>
            View More <FaAngleRight />
          </ViewMoreButton>
        </div>
      </title>

      <div className="d-flex flex-column flex-lg-row gap-3">
        {knowledgeInfos.map((knowledgeInfo, i) => (
          <KnowledgeCard key={i} info={knowledgeInfo} />
        ))}
      </div>
    </Knowledge>
  );
};

export default KnowledgeList;
