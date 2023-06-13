import Router from "./router/Router";
import "./App.css";
import { BgWrapper, InnerContent, TvWrapper } from "./style/styledApp";

function App() {
  return (
    <>
      <BgWrapper>
        <TvWrapper>
          <InnerContent>
            <Router />
          </InnerContent>
        </TvWrapper>
      </BgWrapper>
    </>
  );
}

export default App;
