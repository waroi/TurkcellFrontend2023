import styled from "styled-components";

export const H1 = styled.h1`
  color: var(--primary-color-dark-blue, #003459);
  font-size: 1.5rem;
  font-family: "svngilroy-bold", sans-serif;
  font-weight: 700;
  line-height: 2.25rem;
  text-transform: capitalize;
`;

export const H2 = styled.h2`
  color: #000;
  font-size: 1rem;
  font-family: "svngilroy-bold", sans-serif;
  font-weight: 500;
  line-height: 1.9375rem;
`;

export const PetLeft = styled.div`
  display: flex;
  max-width: 89.875rem;
  padding: 2.5rem 8.125rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.9375rem;
  margin: 0 auto;

  img {
    max-width: 5rem;
    max-height: 4rem;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const OurProductsWrapper = styled.div`
  padding: 0 3.125rem;

  .title {
    gap: 25rem;
  }

  .blogs {
    display: flex;
    flex-wrap: wrap;
    margin: 0 6rem !important;

    @media (max-width: 992px) {
      padding: 0 1rem;
      margin: 0 -4.36rem !important;
      width: 100%;
    }

    .col {
      margin: 1rem auto;
      margin-bottom: 2rem;

      .card {
        text-align: left;
        display: inline-flex;
        padding: 1rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        flex-shrink: 0;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);

        @media (max-width: 992px) {
          width: 22.75rem;
          height: 28.5rem;
        }

        img {
          max-width: 22.75rem;
          max-height: 15.1875rem;
          flex-shrink: 0;
        }
      }

      .card-body {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 0.5rem;
        width: 100%;

        .pet-button {
          display: flex;
          padding: 0.125rem 0.625rem;
          align-items: flex-start;
          gap: 0.625rem;
          border: none;
          border-radius: 28px;
          background: var(--state-color-blue-sea, #00a7e7);
          color: #fff;
        }

        .card-title {
          width: 100%;
          font-family: "svngilroy-bold", sans-serif;
          display: flex;
          flex-wrap: wrap;
          max-width: 21.75rem;
          flex-direction: column;
          color: var(--neutral-color-100, #00171f);
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-text {
          display: flex;
          max-width: 21.75rem;
          height: 3.75rem;
          flex-direction: column;
          overflow: hidden;
          color: var(--neutral-color-80, #242b33);
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
  }
`;

export const PetRight = styled.div`
  font-family: "svngilroy-bold", sans-serif;
  padding: 0 240px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Row = styled.div`
  max-width: 75.75rem;
  height: 23.625rem;
  margin: 0 7rem;
  border-radius: 1.25rem;
  background: #ffb775;
  position: relative;
  overflow: hidden;

  .img-rectangle9 {
    position: absolute;
    left: -32%;
    top: -1%;
    width: 48.89325rem;
    z-index: 10;
  }

  .paw {
    position: absolute;
    top: 0%;
    bottom: 0%;
    right: -95%;
    z-index: 20;
  }

  .rectangle10 {
    position: absolute;
    right: -100%;
    margin-top: 6rem;
    width: 48.89325rem;
    z-index: 20;
  }
`;

export const Title = styled.div`
  position: absolute;
  left: 10%;
  top: -10%;
  width: 30.22125rem;
  height: 23.625rem;
  z-index: 20;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 0.9375rem;
  margin: -2.5rem auto;

  .text {
    position: absolute;
    top: 60%;
    left: 0%;
    text-align: left;
    color: var(--neutral-color-80, #242b33);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.125rem;
    z-index: 20;
  }

  .buttons {
    display: flex;
    gap: 1.25rem;
    position: absolute;
    right: 2%;
    left: -2%;
    height: 3.75rem;
    align-items: center;
    margin-top: 16.25rem;
    z-index: 20;
  }

  .h1 {
    position: absolute;
    width: 30.22125rem;
    height: 23.625rem;
    left: -25%;
    top: 25%;
    z-index: 20;
    color: var(--primary-color-dark-blue, #003459);
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4.25rem;
    text-transform: capitalize;
  }

  .h2 {
    position: absolute;
    width: 30.22125rem;
    height: 23.625rem;
    left: -3%;
    top: 44%;
    z-index: 20;
    color: var(--primary-color-dark-blue, #003459);
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.375rem;
    text-transform: capitalize;
  }

  .title-img {
    right: 10% !important;
    top: 5% !important;
    position: absolute;
    z-index: 20;
  }
`;
