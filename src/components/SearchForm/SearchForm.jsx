import PropTypes from 'prop-types';
import { Search, SearchBtn, SearchInput } from './SearchForm.styled';

export const SearchFrom = ({ onSearch }) => {
  const onSearchSubmit = e => {
    e.preventDefault();

    if (!e.target.elements.query.value.trim()) {
      return;
    }

    onSearch(e);

    e.target.reset();
  };

  return (
    <Search onSubmit={onSearchSubmit}>
      <SearchInput type="text" name="query" />
      <SearchBtn type="submit">Search</SearchBtn>
    </Search>
  );
};

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
