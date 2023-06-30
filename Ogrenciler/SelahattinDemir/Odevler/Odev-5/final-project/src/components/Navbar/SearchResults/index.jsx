import Proptypes from "prop-types";
import { SeacrhResultWrap, SearchResultItem } from "./styled";

const SearchResults = ({ searchQuery }) => {
  return (
    <SeacrhResultWrap>
      {searchQuery?.slice(0, 5)?.map((item) => (
        <SearchResultItem key={item.id} to={`/${item.id}`}>
          <h6>{item.title}</h6>
          <h6>#{item.category}</h6>
        </SearchResultItem>
      ))}
    </SeacrhResultWrap>
  );
};

SearchResults.propTypes = {
  searchQuery: Proptypes.array.isRequired,
};

export default SearchResults;
