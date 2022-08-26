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
    const list = await getPokemonList(); // fonksiyondan dönen değeri list değişkenine tanımladık
    const pokemon = await getThisPokemon(list.results[0].url); // listedeki 0 numaralı pokemunun verilerini pokemon değişkenine aktardık
    console.log(pokemon.stats); // ilgili pokemunun 'stats' verilerini yazdırdık
  } catch (error) {
    console.error(error);
  }
}

export async function myForLoopAsyncAwait() {
  try {
    const list = await getPokemonList(); // fonksiyondan dönen değeri list değişkenine tanımladık
    for (const item of list.results.slice(0, 10)) { // gelen dizinin ilk 0,10 arasındaki elemanlarını tek tek döndürdük
      const pokemon = await getThisPokemon(item.url); // alınan 10 elemanın 'url' verisiyle başka bir api call attık
      console.log(pokemon.name, pokemon.id); //  pokemonların 'name' ve 'id' verilerini yazdırdık
    }
  } catch (error) {
    console.error(error);
  }
}

export async function myReduceLoopAsyncAwait() {
  try {
    const list = await getPokemonList(); // fonksiyondan dönen değeri list değişkenine tanımladık
    list.results.reduce<Promise<any>>(async (pr, item) => {
      await pr;
      return getThisPokemon(item.url).then(p => console.log(p.name));
    }, Promise.resolve()); // başlangıç değeri ?
  } catch (error) {
    console.error(error);
  }
}
