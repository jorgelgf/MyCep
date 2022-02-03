import styled from "styled-components";
export const DivInput = styled.div`
  border-radius: 5px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 3px #fff solid;
  ::-webkit-input-placeholder {
    color: #f9fbfd;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  font-family: "Courier New", Courier, monospace;
  font-size: medium;
  color: #fff;
  width: auto;
  border-radius: 5px;
  width: 40%;
  height: 1em;
  padding: 0.8em;
  outline: #fff;
  transition: 0.3s ease;
  margin: 1em;
  :focus {
    transition: 0.3s ease;
    box-shadow: 1px 1px 10px 3px white;
  }
`;

export const Label = styled.label`
  font-family: "Courier New", Courier, monospace;
  font-size: large;
  color: #fff;
  text-shadow: #000 1px 1px 2px;
  margin: 1em;
`;
