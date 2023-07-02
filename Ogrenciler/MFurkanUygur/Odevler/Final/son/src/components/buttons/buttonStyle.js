import styled from 'styled-components'


export const ButtonGroup = styled.div`
display:flex;

`
export const DarkBorderButton = styled.button`
width: 163px;
color: #FDFDFD;
background-color:transparent;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
border-radius: 57px;
border: 1.5px solid  #FDFDFD;
display: inline-flex;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 8px;
@media screen and (max-width:992px){
    display:none
}
`

export const WhiteBorderButton = styled.button`
width: auto;
color: #003459;
background-color:transparent;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
border-radius: 57px;
border: 2px solid  #003459;
display: flex;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 8px;

@media screen and (max-width:992px){
    display:none
}

`
export const WhiteBorderButtonForMobile = styled.button`

display:none;

@media screen and (max-width:992px){
    display:block;
    width: 163px;
color: #003459;
background-color:transparent;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
border-radius: 57px;
border: 2px solid  #003459;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 8px;
}

`
export const DarkButton = styled.button`
color:  #FDFDFD;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
border: 1.5px solid  #003459;
display: flex;
width: 163px;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 57px;
background:  #003459;
`

export const DarkButtonForMobile = styled.button`
color:  #FDFDFD;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
border: 1.5px solid  #003459;
display: none;
width: 163px;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 57px;
background:  #003459;
@media screen and (max-width:992px){
    display:block
}
`
export const DarkButtonNavbar = styled.button`
color:  #FDFDFD;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
border: none;
display: flex;
width: 170px;
height:40px;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 57px;
background:  #003459;
&:hover{
    color:white;
}

`
export const WhiteButton = styled.button`
display: flex;
border:none;
width: 163px;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 57px;
background:  #FDFDFD;
color: #00171F;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
@media screen and (max-width:992px){
    display:none
}
`
export const CardButtonGroup = styled.div`
width:100%;
display:flex;
justify-content:space-evenly;
`
export const CardButton = styled.button`
    margin:10px 0;
    padding:5px;
    border-radius:10px;
    color: white;
    background:  #003459;
    border: 1.5px solid  #003459;
    border:none;
    &:hover{
        background:#003459;
        color:#white;
    }
`


export const ContactUs = styled.button`
display: flex;
height: 40px;
color:#FDFDFD;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
border:none;
gap: 10px;
border-radius: 57px;
background: var(--primary-color-dark-blue, #003459);
`
export const ChatMonito = styled.div`
display: flex;
height: 40px;
padding: 10px 20px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 57px;
border: 2px solid var(--primary-color-dark-blue-80, #002A48);
@media screen and (max-width:992px){
   
}

`