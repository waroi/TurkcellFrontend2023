import {
  StatsLi,
  StatsUlBlue,
  StatsUlWhite,
  StatsBg,
  StatsText,
  ColorfulSpan,
} from "./DetailMidStyle";

const DetailMidViews = ({ pokemon }) => {
  return (
    <div className="row bg-white pt-3">
      <StatsBg className="col-lg-6 p-3">
        <h3>Stats</h3>
        <div className="row mt-3">
          {pokemon.stats.map((item, index) => (
            <StatsLi key={index} className="col-2">
              {Array(Math.round(15 - (item.base_stat * 15) / 100)).fill(
                <StatsUlWhite />
              )}
              {Array(15 - Math.round(15 - (item.base_stat * 15) / 100)).fill(
                <StatsUlBlue />
              )}
              <StatsText>{item.stat.name}</StatsText>
            </StatsLi>
          ))}
        </div>
      </StatsBg>
      <div className="col-lg-6">
        <div className="mt-3">
          <h3 className="mt-3">Type</h3>
          <div className="mt-3">
            {pokemon.types.map((item, index) => (
              <ColorfulSpan key={index}>{item.type.name}</ColorfulSpan>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMidViews;
