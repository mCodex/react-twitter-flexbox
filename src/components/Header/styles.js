import styled from 'styled-components';

import searchIcon from '../../assets/search.svg';

export const Container = styled.header`
  height: 46px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  nav {
    ul {
      display: flex;
      list-style: none;

      li {
        font-size: 13px;
        color: #667580;
        font-weight: bold;

        & + li {
          margin-left: 30px;
        }
        svg {
          margin-right: 7px;
        }
      }
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;

  svg {
    margin: 0 15px;
    width: 34px;
    height: 34px;
  }

  input {
    width: 220px;
    background: #f5f8fa;
    border: 1px solid #e6ecf0;
    height: 34px;
    padding: 0 30px 0 12px;
    font-size: 12px;
    color: #667581;
    border-radius: 16px;
    background: #f5f8fa url(${searchIcon}) no-repeat 190px center;
    background-size: 20px 20px;
  }

  button {
    height: 34px;
    background: #3bb9e3;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 90px;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    border: 0;
    border-radius: 16px;
  }
`;
