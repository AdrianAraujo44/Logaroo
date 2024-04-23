import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 250px;
  background-color:#fae6d8;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;

  img {
    width: 120px;
    height: 127px;
    padding-bottom: 20px; 
  }

  strong{
    color: #293845;
    font-weight: 600;
    padding-bottom: 10px; 
  }

  p{
    color: #e8833a;
    text-decoration: underline #f4c29f;
    cursor: pointer
  }
`