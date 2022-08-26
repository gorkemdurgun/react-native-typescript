interface IPokemonList {
  count: number;
  next: string;
  previous?: any;
  results: {
    name: string;
    url: string;
  }[];
}

interface IPokemon {
  id: number;
  name: string;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

const getPokemonList = async (): Promise<IPokemonList> => {
  // IPokemonList tipinde return alacağımız için bu tipi tanımladık
  const listResponse = await fetch('https://pokeapi.co/api/v2/pokemon'); // listeye çağrı gönderdik
  return await listResponse.json(); // listeyi json formatında aldık
};

const getThisPokemon = async (url: string): Promise<IPokemon> => {
  // IPokemon tipinde return alacağımız için bu tipi tanımladık
  const dataResponse = await fetch(url); // listeden gelen pokemonun 'url'i ile ilgili pokemonun verileri için api call yaptık
  return await dataResponse.json(); // pokemonun verilerini json formatında aldık
};

export async function myAsyncAwait() {
  try {
    const list = await getPokemonList(); // fonksiyondan dönen değeri list değişekenine tanımladık
    const pokemon = await getThisPokemon(list.results[0].url); // listedeki 0 numaralı pokemunun verilerini pokemon değişkenine aktardık
    console.log(pokemon.stats); // ilgili pokemunun 'stats' verilerini yazdırdık
  } catch (error) {
    console.error(error);
  }
}
