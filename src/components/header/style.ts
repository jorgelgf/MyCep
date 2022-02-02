import styled from "styled-components";

export const Header = styled.div`
  position: static;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Hammersmith One", sans-serif;
  font-size: clamp(2em, 2em + 2vw, 3em);

  width: 100%;
  height: 2em;
  border-bottom: 3px solid white;
`;
