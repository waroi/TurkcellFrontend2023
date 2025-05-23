import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { pokemonDetailForDetailPage } from "../../class/fetchPokemons";
import TopDetail from "./TopDetailPage/TopDetail";
import ImageSection from "./ImageSection/ImageSection";
import InfoSection from "./InfoSection/InfoSection";
import { DetailPokemonContainer, SectionWrapper } from "./DetailPokemonStyle";
import { Container } from "../ContainerStyle";
import PokemonChart from "./PokemonChart/PokemonChart";
const DetailPokemon = () => {
  const [detailPoke, setDetailPoke] = useState(null);
  const { pokemonName } = useParams();

  const getDetailPokemon = async () => {
    const response = await pokemonDetailForDetailPage(pokemonName);
    setDetailPoke(response);
  };


  useEffect(() => {
    getDetailPokemon();
  }, [pokemonName]);

  const topValues = {
    name: detailPoke?.name,
    id: detailPoke?.id,
  };

  const imageSectionValues = {
    image: detailPoke?.sprites?.other?.dream_world?.front_default,
  };

  const infoSectionValues = {
    height: detailPoke?.height / 10,
    weight: detailPoke?.weight / 10,
    abilities: detailPoke?.abilities,
    types: detailPoke?.types,
  };

  const chartValues = {
    labels: detailPoke?.stats.map(statName => statName.stat.name),
    datasets: [{
      label: `${detailPoke?.name.toUpperCase()} Stats`,
      data: detailPoke?.stats.map(statName => statName.base_stat)
    }]
  }

  return (
    <Container>
      <DetailPokemonContainer>
        <TopDetail topValues={topValues} />
        <SectionWrapper>
          <ImageSection imageSectionValues={imageSectionValues} />
          <InfoSection infoSectionValues={infoSectionValues} />
        </SectionWrapper>
        <PokemonChart chartValues = {chartValues}/>
      </DetailPokemonContainer >
    </Container>
  );
};

export default DetailPokemon;
