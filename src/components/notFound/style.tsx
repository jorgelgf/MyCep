import styled from "styled-components";

export const ContainerNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: min(20px);
  margin-top: 3em;
  margin-bottom: 50px;

  transform: translateX(-20px);
  animation: animeLeft 0.4s forwards;
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
