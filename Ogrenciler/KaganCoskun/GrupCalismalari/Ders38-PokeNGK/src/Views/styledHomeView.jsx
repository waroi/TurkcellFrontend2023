import styled from "styled-components";

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat( auto-fit, minmax(184px, 1fr) );
grid-gap: 1rem;
margin-top: 50px;
justify-items: center;

@media screen and (max-width: 1200px){
    grid-template-columns: repeat( auto-fit, minmax(120px, 1fr) );
}
`

