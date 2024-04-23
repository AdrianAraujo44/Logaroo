import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 12px;

  label {
    color: #666666;
  }
`
export const TextArea = styled.textarea<{ $error?: boolean; }>`
  width: 100%;
  max-width: 270px;
  padding: 4px 8px ;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  color: #444;
  border: ${props => props.$error ? " 1px solid #ff0000" : "1px solid #AFB3B0"};
  
  &:hover {
    border: ${props => props.$error ? " 1px solid #ff0000" : "1px solid #00C100"};
  }

  &:focus{
    border: ${props => props.$error ? " 1px solid #ff0000" : "1px solid #00C100"};
  }

  &::placeholder {
    color: #AFB3B0
  }
`