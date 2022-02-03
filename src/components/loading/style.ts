import styled from "styled-components";

export const DivLoading = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid;
  border-radius: 50%;
  box-shadow: white 1px 1px 10px;
  border-top-color: transparent;
  margin: 100px auto;
  color: white;
  animation: load 0.6s linear infinite;
  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
`;
