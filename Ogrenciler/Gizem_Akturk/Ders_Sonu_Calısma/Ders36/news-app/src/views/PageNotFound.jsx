import React from "react";
import NotFound from "../assets/404-img.png";
import styled from "styled-components";
const Image = styled.img`
 width: 40%; height: 40%; padding: 0 450px 40px 450px; margin-top: 150px; object-fit: cover; object-position: center;`;
 const Container = styled.div`
 min-width: 1900px; 
 @media screen and (max-width: 1900px) { min-width: 90%};
`;
const PageNotFound = () => {
return (
<Container>
<Image src={NotFound} />
</Container>
);
};
export default PageNotFound;