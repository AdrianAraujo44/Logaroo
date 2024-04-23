import styled from "styled-components";

export const Wrapper = styled.div`
  width:100%;
  height:100vh;
  top:0;
  right:0;
  left:0;
  right:0;
  background-color:rgba(0, 0, 0, 0.7);
  position: fixed;
  display:flex;
  align-items: end;
  justify-content:end;
`

export const Container = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #fff;

  #header {
    width: 100%;
    height: 60px;
    font-weight: bold;
    color: #e8833a;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    border-bottom: 1px solid #c5ced6;
    align-items: center;
    font-size: 16px;

    button {
      outline: none;
      border: none;
      background-color: transparent;

      &:hover {
        cursor: pointer
      }
    }
  }

  #body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: calc(100vh - 120px);
  }

  #footer {
    padding: 20px;
    display: flex;
    gap: 12px;
    justify-content: end;
    border-top: 1px solid #c3cfd9;
    align-items: center;
    height: 60px;
  }
`