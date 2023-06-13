import { useSelector } from "react-redux";

const SearchJoke = () => {
  const jokes = useSelector((state) => state.searchJoke);
  console.log(jokes);

  return (
    <div>
      {jokes.length > 0 && jokes.slice(0, 20).map((item) => <div key={item.id}>{item.value} </div>)}
    </div>
  );
};

export default SearchJoke;
