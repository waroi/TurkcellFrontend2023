import styled from "styled-components";

export const ContainerBanner = styled.div`
  margin-top: 2%;
  width: 81.75rem;
  height: 23.625rem;
  border-radius: 1.25rem;
  background: var(
    --linear,
    linear-gradient(134deg, #fceed5 6.17%, #fceed5 75.14%, #ffe7ba 100%)
  );
  overflow: hidden;

  .img-banner {
    position: absolute;
    left: 12%;
    z-index: 2;
    margin-top: 11%;
  }

  .img-rectangle {
    position: absolute;
    right: 0%;
    width: 155%;
    overflow: hidden;
    z-index: 1;
  }

  .right-products {
    position: absolute;
    left: 8%;
    z-index: 3;
    color: var(--neutral-color-00, #fdfdfd);
    align-items: right;
    display: flex;
    flex-direction: column;
    margin-top: 10%;

    h1 {
      color: var(--neutral-color-00, #fdfdfd);
      font-size: 3.25rem;
      font-style: normal;
      font-weight: 800;
      line-height: 4.25rem;
      text-transform: capitalize;
      margin-left: -1.5rem;
    }

    h2 {
      color: var(--neutral-color-00, #fdfdfd);
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: 3.375rem;
      text-transform: capitalize;
      margin-left: 1.5rem;
    }

    p {
      display: flex;
      width: 24.625rem;
      flex-direction: column;
      color: var(--neutral-color-20, #ccd1d2);
      text-align: right;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.125rem;
    }

    .buttons {
      margin-left: 1.4rem;
      @media (max-width: 992px) {
        margin-left: -1.2rem;
      }
    }
  }

  @media (max-width: 992px) {
    max-width: 21.875rem;
    height: 27.5625rem;

    .img-rectangle {
      overflow: hidden;
      width: 180%;
      right: 1%;
      top: 20rem;
      rotate: 5deg;
    }

    .img-div {
      position: relative;
    }

    .img-banner {
      width: 120%;
      position: absolute !important;
      margin-left: -21%;
      margin-top: 71%;
      z-index: 2;
      overflow: hidden;
    }

    .right-products {
      position: absolute;
      left: 1%;
      z-index: 3;
      color: var(--neutral-color-00, #fdfdfd);
      align-items: right;
      display: flex;
      flex-direction: column;
      margin-top: 5%;
      text-align: left;
      margin-left: 1.2rem;
    }

    h1 {
      color: var(--primary-color-dark-blue-80, #002a48) !important;
      font-size: 2.625rem !important;
      font-style: normal;
      font-weight: 800;
      line-height: 3.75rem;
      text-transform: capitalize;
    }

    h2 {
      color: var(--primary-color-dark-blue-80, #002a48) !important;
      font-size: 1.625rem !important;
      font-style: normal;
      font-weight: 700;
      line-height: 2.375rem;
      text-transform: capitalize;
      margin-left: 0 !important;
    }

    .text-banner {
      width: 20.625rem !important;
      color: var(--neutral-color-80, #242b33) !important;
      text-align: left !important;
      font-size: 0.75rem !important;
      font-style: normal;
      font-weight: 500;
      line-height: 1.125rem !important;
    }

    .buttons {
      margin-top: 1.5rem;
      gap: 1rem !important;
      margin-left: -1.2rem;
    }
  }
`;
