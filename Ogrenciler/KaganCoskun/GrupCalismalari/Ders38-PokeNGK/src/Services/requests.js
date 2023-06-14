
export async function getCards() {
    const response = await fetch(`${import.meta.env.VITE_POKEMON_API}/pokemon`);
    const cards = await response.json();
    let randomArr = [];

    for(let i = 0;i<6;i++){
      let random = Math.floor(Math.random()*20);
      let pokemon = cards.results[random];
      
      randomArr.push(pokemon);
      randomArr.push(pokemon);
    }
    randomArr = [...randomArr].sort(()=>Math.random()-0.5);
    return randomArr;
  }

  export async function getCardDetail(name) {
    const response = await fetch(`${import.meta.env.VITE_POKEMON_API}/pokemon/${name}`);
    const card = await response.json();
    return card;
  }