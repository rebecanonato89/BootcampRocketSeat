import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center; // alinha verticalmente
  justify-content: space-between; //dá um espaço entre as duas informações na tela - joga um para cada lado.


  a {
    display: flex;
    align-items: center;
    text-decoration: none; // para ficar sem o underline
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px; // distanciar o icone do texto
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;// distancia do Header

  header {
    display: flex; // para o titulo e descrição ficar ao lado.
    align-items: center; 

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex; // ficar ao lado lado
    list-style: none; // tirar as bolinhas da lista
    margin-top: 40px; // espço do header

    li {
      & + li {
        margin-left: 80px; // todo elemento li que é precedido de outro li terá o 80px de distancia
      }

      strong {
        display: block; // quebrar linha
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block; // quebrar linha
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(10px);
    }
    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;