import styled from 'styled-components'

export const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #c6c6c6;
    padding: 0 20px;
    font-size: 1.2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    img{
      width: 120px;
    }
    div{
      ul{
        display: flex;
        li{
          list-style: none;
          margin: 0 10px;
          button{
            background-color: transparent;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
          }
        }
      }
    }
  `;