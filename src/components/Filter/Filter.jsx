import {FilterInput, FilterWrapper, SearchIcon} from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter({handleFilter}) {
  return (
    <FilterWrapper>
      <FilterInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Search"
        onChange={handleFilter}
      />
      <SearchIcon/>
    </FilterWrapper>

  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func,
};