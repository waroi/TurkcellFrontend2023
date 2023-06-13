import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  h2 {
    font-size: 2rem;
  }
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.5);

    div {
      overflow-y: scroll;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      width: 55%;
      background: #f25a25;
      padding: 2rem;
      border-radius: 1rem;
      color: white;
      font-weight: bold;
      gap: 0.5rem;
      justify-content: center;
      p {
        text-shadow: 1px 1px 1px black;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fbfbfb;
        width: 100%;
        min-height: 4rem;
        color: black;
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 1rem;
        p {
          text-shadow: none;
        }
        button {
          cursor: pointer;
          border: 1px solid black;
          background-color: transparent;
          &:hover {
            background-color: #f25a25;
            color: white;
          }
        }
      }

      .categoryBtn {
        background-color: white;
        color: #080200;
        font-weight: bold;
        &:hover {
          color: #f25a25;
        }
      }
    }

    form {
      width: 100%;
      input {
        width: 100%;
        padding: 1rem 1.5rem;
        border-radius: 0.7rem;
        border: none;
        color: #f25a25;
        text-shadow: 1px 1px 1px #f25c257c;
        font-size: 1.2rem;
      }
    }

    .joke {
      border-bottom: 1px solid #ffffff;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1rem;
    }
    .dialog {
      div {
        width: 100%;
        gap: 0.1rem;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 50%;
  height: 50%;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;
