import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const TableUI = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    border-bottom: 1px solid gray;
    font-size: 14px;
    font-weight: bold
  }

  th, td, tr {
    text-align: left;
    height: 40px;
    padding: 5px;
    pointer-events: auto;
  }

  td {
    font-size: 14px;
  }

  tbody > tr:hover {
    background-color: #d8d8d8;
  } 
`

export const ActionButtons = styled.div`
  min-width: 60px;

  button {
    pointer-events: auto;   
    outline: none;
    border:none;
    background-color: transparent;
    padding-left: 8px;

    &:hover {
      cursor: pointer
    }
  }
`

export const Pagination = styled.div`
  display: flex;
  gap: 12px;

  .previous, .next {
      border: 1px solid #666
    }
`

export const PaginationButton = styled.button<{active?: boolean}>`
  width:30px;
  height: 30px;
  border-radius: 50%;
  border:none;
  outline:none;
  font-size: 14px; 
  cursor: pointer;
  background-color: ${props => props.active == true ? '#666' : "transparend"};
  color: ${props => props.active == true ? '#fff' : "transparend"};
  display:flex;
  align-items:center;
  justify-content:center;

  &:hover {
    background-color: #666666;
    color: #fff;
  }

  &:disabled {
    background-color: transparent;
    border: 1px solid #666;
    color: #666;
    &:hover {
      background-color: transparent;
    }
  }

`