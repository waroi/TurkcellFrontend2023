import styled from "styled-components";

export const AdoptionReversContainer = styled.div`
  border-radius: 20px;
  background: ${(props) => props.bg};
  overflow: hidden;
  .layoutReversed {
    width: 48.89325rem;
    height: 39.6875rem;
    transform: rotate(25.23deg);
    flex-shrink: 0;
    border-radius: 6.1875rem;
    background: #fceed5;
    z-index: 1;
    left: 38.63rem;
    top: -12.65rem;
  }

  .layout2Reversed {
    width: 49.22125rem;
    height: 49.22125rem;
    transform: rotate(28.251deg);
    flex-shrink: 0;
    border-radius: 6.1875rem;
    background: #002a48;
    left: -21.95rem;
    top: 7.39rem;
    z-index: 0;
  }

  .layoutAdoption {
    width: 48.89325rem;
    height: 39.6875rem;
    transform: rotate(45.23deg);
    flex-shrink: 0;
    border-radius: 6.1875rem;
    background: #fceed5;
    z-index: 1;
    left: -15.32rem;
    top: -8.65rem;
  }

  .layout2Adoption {
    width: 49.22125rem;
    height: 49.22125rem;
    transform: rotate(48.251deg);
    flex-shrink: 0;
    border-radius: 6.1875rem;
    opacity: 0.30000001192092896;
    background: linear-gradient(
      134deg,
      #fceed5 6.17%,
      #fceed5 75.14%,
      #ffe7ba 100%
    );
    z-index: 1;
    right: -15.95rem;
    top: 10.8rem;
  }

  .reversedHero,
  .adoptionBanner {
    z-index: 2;
    position: relative;
  }

  @media screen and (max-width: 768px) {
    .layoutReversed {
      width: 37.81419rem;
      height: 39.6875rem;
      transform: rotate(11.41deg);
      border-radius: 4.6875rem;
      left: -15rem;
      top: -24.65rem;
    }
    .layout2Reversed {
      top: 24.39rem;
    }
  }
`;
