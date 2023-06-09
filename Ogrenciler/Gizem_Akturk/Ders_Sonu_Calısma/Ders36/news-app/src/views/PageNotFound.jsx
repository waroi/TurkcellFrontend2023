import React from "react";
import NotFound from "../assets/404-img.png";
import styled from "styled-components";
const Image = styled.img`
 width: 40%; height: 40%; padding: 0 450px 40px 450px; margin-top: 150px; object-fit: cover; object-position: center;`;
const PageNotFound = () => {
return (
<div>
<Image src={NotFound} />
</div>
);
};
export default PageNotFound;