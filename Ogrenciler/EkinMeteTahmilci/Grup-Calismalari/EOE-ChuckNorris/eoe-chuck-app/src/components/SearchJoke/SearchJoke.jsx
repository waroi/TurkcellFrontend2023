import { useSelector } from "react-redux";
import { JokeCard } from "./SearchJokeStyle";

const SearchJoke = () => {
  const jokes = useSelector((state) => state.searchJoke);
  console.log(jokes);

  return (
    <div>
      <div className="row">
        {jokes.length > 0 ? (
          jokes.slice(0, 20).map((item) => (
            <div key={item.id} className="col-md-4 mb-3">
              <JokeCard>
                <div>{item.value} </div>
              </JokeCard>
            </div>
          ))
        ) : (
          <div>Uygun bir deger giriniz</div>
        )}
      </div>
    </div>
  );
};

export default SearchJoke;
