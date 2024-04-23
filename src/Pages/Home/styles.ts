import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content:center;
  padding-top: 20px;
  flex-direction: column;
`

export const Title = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 180px;
  background-color: #fae6d8; 
  display:flex;
  flex-direction: column;
  gap:10px;
  justify-content:center;
  padding: 20px;

  h1 {
    font-weight: bold;
    font-size: 55px;
    color: #e8833a
  }

  p {
    font-weight: 600;
    font-size: 14px;
  }
`

export const Header = styled.header`
  display: flex;
  width: 100%;
  max-width: 1200px;
  background-color: #f2f5f7;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid gray;
  margin-top: 10px;

  .box {
    display: flex;
    gap: 8px;
  }
`

export const Content = styled.div<{$content:boolean}>`
  background-color: #f2f5f7;
  width: 100%;
  max-width: 1200px;
  min-height: 400px;
  padding: 20px;
  display: flex;
  justify-content: ${(props) => props.content ? 'start' : 'center'};
  align-items: ${(props) => props.content ? 'center' : 'start'}
`
