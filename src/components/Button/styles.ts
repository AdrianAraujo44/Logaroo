import styled from "styled-components";

const button = styled.button`
  min-width: 100px;
  height: 32px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 32px;
  font-weight: bold;
`

export const BasicButton = styled(button)`
  border: none;
  background-color: #e8833a;
  color: #fff;

  &:hover{
    background-color:#d06518;
    cursor: pointer
  }
`

export const OutlineButton = styled(button)`
  border: 1px solid #e8833a;
  background-color:#fff;
  color: #d06518;
  
  &:hover{
    background-color:rgba(208, 101, 24, 0.2);
    cursor: pointer;
    color: #fff;
    color: #e8833a
  }
`