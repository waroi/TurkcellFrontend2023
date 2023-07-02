import styled from 'styled-components'

export const FooterSection = styled.section`


display: flex;
border-radius: 40px 40px 0px 0px;
background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
padding: 80px 0 40px 0;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
gap: 40px;
flex-shrink: 0;
@media screen and (max-width:992px){
    padding:0;

}
`

export const FooterBar = styled.div`

display:flex;
border-radius: 16px;
background: var(--primary-color-dark-blue, #003459);
display: flex;
padding: 32px;
align-items: flex-start;
gap: 20px;
@media screen and (max-width:992px){
    margin-top:40px;

}
`
export const FooterTitle = styled.p`
color: var(--neutral-color-00, #FDFDFD);
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 36px;
text-transform: capitalize;
display: flex;

flex-direction: column;
`

export const FooterSearch = styled.div`
display: flex;
padding: 12px;
justify-content:center;
align-items: center;
gap: 12px;
border-radius: 14px;
background: #FFF;
width:100%;
.search-container{
    width:100%;
    display:flex;
    justify-content:center;
    padding:0;
    margin:0;
    align-items:center;
}
@media screen and (max-width:992px){

}
`

export const FooterButton = styled.button`
display: flex;
width: 163px;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 8px;
background: var(--primary-color-dark-blue, #003459);
color: var(--neutral-color-00, #FDFDFD);
width:100%;
border:none;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
`

export const FooterSearchBar = styled.input`
display: flex;
padding: 14px 28px;
align-items: center;
gap: 10px;
flex: 1 0 0;
border-radius: 8px;
border: 1px solid var(--neutral-color-40, #99A2A5);
background: #FFF;

`
export const FooterLink = styled.div`
    gap:40px;
    justify-content:start;
    @media screen and (max-width:992px){
        justify-content:center;
        margin-bottom:2 0px
    }
`
export const FooterIconCont = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 35px;
    justify-content:end;
    @media screen and (max-width:992px){
        justify-content:center;
        margin-top:20px;
    }
`
export const FooterIcon = styled.img`
    width: 24px;
    height: 24px;
    position:absolute
`
export const FooterNav = styled.ul`

    margin:30px 0;
    color:  #00171F;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    
    @media screen and (max-width:992px){
        margin:40px 0;
    }
    
`

export const FooterFooter = styled.ul`
    position:relative;
    margin:40px 0;
    padding:20px 0 0 0 ;
    display:flex;
    justify-content:between;
    align-items:center;
    color: #667479;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    .footer-logo{
        position:relative;
    }
    @media screen and (max-width:992px){
        justify-content:center;
        flex-direction:column;
        .footer-logo{
            position:absolute;
            bottom:4rem;
        }
        .reserved{
            position:relative;
            bottom:-5rem;
        }
        .terms{
            position:relative;
            bottom:-0.5rem;
        }
    }
`