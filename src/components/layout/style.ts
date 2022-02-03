import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #191919;
  width: 100%;
  color: white;
  height: 100vh;
  background: linear-gradient(45deg, #a0c1b8, #726a95, #719fb0, #a0c1b8);
  background-size: 300% 300%;
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
