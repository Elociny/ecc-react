import styled from "styled-components"; 

const Div = styled.div`
  .cabecalho {
      background-color: #3C6E71;
      color: #d9d9d9;

      padding: 15px 30px;

      display: flex;
      flex-direction: row;

      justify-content: space-between;
  }

  .conjunto {
      display: flex;
      flex-direction: row;
  }

  .inp input {
      border: none;
      border-radius: 50px;

      padding: 10px 15px 10px 150px;
      margin: 0px 7px;

      background-color: #609FA3;

      text-align: right
  }

  .botao button {
    margin: 0px 7px;

    border: none;

    background-color: #3C6E71;
  }
`;

export { Div };