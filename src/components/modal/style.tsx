import styled from "styled-components";

export const ContainerFull = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContainerModal = styled.div`
  color: #1c1e1e;
  position: fixed;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  top: 50%;
  left: 50%;
  margin: -50px -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;

  transform: translateY(-20px);
  animation: animeTop 0.4s forwards;
  @keyframes animeTop {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
