import styled from '@emotion/styled';

export const Search = styled.form`
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 300px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 3px;

  line-height: 1.3;

  border: 1px solid rgb(192, 192, 192);
  border-radius: 5px;
`;

export const SearchBtn = styled.button`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;

  line-height: 1.3;

  border: 1px solid rgb(105, 105, 105);
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: orangered;

    color: rgb(250, 250, 250);
  }

  &:active {
    background-color: DarkRed;
  }
`;
