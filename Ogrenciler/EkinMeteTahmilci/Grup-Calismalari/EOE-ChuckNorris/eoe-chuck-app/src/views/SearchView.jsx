import { useRef } from "react";
import { setSearchJoke } from "../redux/slices/searchSlice";
import { useDispatch } from "react-redux";
import SearchJoke from "../components/SearchJoke/SearchJoke";

const SearchView = () => {
  const dispatch = useDispatch();
  const searchRef = useRef("");
  const handleSubmit = (e) => {
    if (searchRef !== "") {
      fetch(
        ` https://api.chucknorris.io/jokes/search?query=${searchRef.current.value.trim()}`
      )
        .then((res) => res.json())
        .then((resp) => dispatch(setSearchJoke(resp.result)));
    }

    e.preventDefault();
  };
  return (
    <div>
      <div className="input-group input-group-lg mt-3">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            ref={searchRef}
          />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
      <SearchJoke />
    </div>
  );
};

export default SearchView;
