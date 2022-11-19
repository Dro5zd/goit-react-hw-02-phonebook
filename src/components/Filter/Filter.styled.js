import styled from 'styled-components';
import {Search} from '@styled-icons/evaicons-solid/Search';

export const FilterWrapper = styled.div`
  position: relative;
`;

export const FilterInput = styled.input`
  width: 310px;
  padding: 8px 30px;
  font-size: 15px;
  background-color: #eeedec;
  border: none;
  border-radius: 10px;
`;

export const SearchIcon = styled(Search)`
  color: grey;
  width: 20px;
  position: absolute;
  top: 6px;
  left: 5px;
`