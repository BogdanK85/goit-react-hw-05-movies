import { styled } from 'styled-components';

export const SearchWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 30px 0;
  margin-bottom: 30px;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 30px 0; */
  margin-bottom: 0;
  gap: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  color: rgb(255, 77, 77);
  border: 1px solid #f5dddd;
  border-radius: 5px;
  background-color: #fdd2d2;

  &: hover {
    color: #222222;
    background-color: #e2e2e2;
  }
`;

export const IconSearch = styled.svg`
  fill: #fff;
  transition: fill 0.3s fill-opasity 0.3s;

  &:hover,
  &:focus {
    fill: #040404;
    fill-opasity: 0.6;
  }
`;
export const Input = styled.input`
  width: 350px;
  height: 50px;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: rgb(255, 77, 77);
  background: rgba(0, 0, 0, 0.25);
`;
