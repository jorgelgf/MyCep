import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  height: auto;
  transform: translateX(-20px);
  animation: animeLeft 0.4s forwards;
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
