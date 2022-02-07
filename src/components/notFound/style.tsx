import styled from "styled-components";

export const ContainerNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: min(20px);
  margin-top: 3em;
  animation: colors 20s ease infinite;
  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
