import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  color: #fff;
  background-color: #3e9278;
  width: auto;
  height: auto;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease;
  :hover {
    background-color: #93b5c6;
    color: #fff;
    background: #74baa0;
    transition: 0.2s ease;
  }
`;
