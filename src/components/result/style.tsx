import styled from "styled-components";

export const Div = styled.div`
  border: 3px #fff solid;
  font-family: "Courier New", Courier, monospace;
  font-size: medium;
  padding: 10px;
  border: 0 0 3px 0 solid #fff;
  border-radius: 5px;
  width: auto;
  transform: translateX(-20px);
  animation: animeLeft 0.4s forwards;
  margin-bottom: 50px;
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const Label = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: large;
  color: #fff;
  text-shadow: #000 1px 1px 2px;
  transform: translateX(-20px);
  animation: animeLeft 0.4s forwards;
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
