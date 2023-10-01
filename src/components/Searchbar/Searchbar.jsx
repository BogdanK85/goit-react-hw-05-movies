import { useState } from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as IconSearch } from '../../images/search.svg';
import {
  Input,
  SearchBtn,
  SearchForm,
  SearchWrapStyle,
} from './SearchBar.Styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      return toast.info('enter a word for searching');
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <SearchWrapStyle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <IconSearch width="30" heigth="30" />
          Search
        </SearchBtn>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchWrapStyle>
  );
};
