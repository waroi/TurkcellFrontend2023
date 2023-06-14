import { useRef } from "react";
import { setSearchJoke } from "../redux/slices/searchSlice";
import { useDispatch } from "react-redux";
import SearchJoke from "../components/SearchJoke/SearchJoke";
import { Form } from "../components/FormStyle";

const SearchView = () => {
  const dispatch = useDispatch();
  const searchRef = useRef("");
  const handleSubmit = (e) => {
    // if (searchRef !== "") {
    fetch(
      ` https://api.chucknorris.io/jokes/search?query=${searchRef.current.value.trim()}`
    )
      .then((res) => res.json())
      .then((resp) => dispatch(setSearchJoke(resp.result)));
    // }

    e.preventDefault();
  };
  return (
    <div>
      <div className="input-group input-group-lg mt-3">
        <Form onSubmit={handleSubmit} className="mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-transparent text-white"

              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              ref={searchRef}
            />
            <button className="btn btn-primary p-3">Search</button>
          </div>
        </Form>
      </div>
      <SearchJoke />
    </div>
  );
};

export default SearchView;
