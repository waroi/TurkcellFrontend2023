import Proptypes from "prop-types";
import { SeacrhResultWrap, SearchResultItem, Title } from "./styled";

const SearchResults = ({ searchQuery }) => {
  return (
    <SeacrhResultWrap>
      {searchQuery?.slice(0, 5)?.map((item) => (
        <SearchResultItem key={item.id} to={`/${item.id}`} className="row">
          <Title>{item.title}</Title>
          <Title>#{item.category}</Title>
        </SearchResultItem>
      ))}
    </SeacrhResultWrap>
  );
};

SearchResults.propTypes = {
  searchQuery: Proptypes.array.isRequired,
};

export default SearchResults;
