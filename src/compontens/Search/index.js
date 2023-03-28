import SearchIcon from '../../assets/SearchIcon.svg';
import { SearchContainer, SearchInput } from "./styles.js";

const Search = ({
  value,
  onChangeText,
  placeholder
}) => {
  return(
    <SearchContainer>
      <SearchInput {...{
        value,
        onChangeText,
        placeholder
      }}/>
      <SearchIcon />
    </SearchContainer>
  )
}

export { Search }