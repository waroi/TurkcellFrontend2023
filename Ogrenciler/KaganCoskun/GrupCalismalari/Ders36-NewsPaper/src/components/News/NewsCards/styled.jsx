import styled from 'styled-components';


export const Card = styled.div`
 align-self: flex-start;
  position: relative;
  width: 325px;
  min-width: 275px;
  margin: 1.25rem 0.75rem;
  background: white;
  transition: all 300ms ease-in-out;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`


export const CardImage = styled.img`
 width: 100%;
    height: var(--card-img-height);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 5px 5px 0 0;
`

export const CardUpperInfo = styled.div`
display: flex;
justify-content: space-between;
`

export const CardBody = styled.div`
padding: 0 .5em;
`

export const CardCategory = styled.h4`
  position: relative;
`

export const CardTime = styled.p`
  color: gray;
`

export const CardTitle = styled.p`
 display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: black;
    line-height: 1.5em;
`