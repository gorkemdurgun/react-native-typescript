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

export function thenCatchExample() {
  // birbirini bekleyen işlemler için klasik then, catch kullanımı
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then((data: IPokemonList) => {
      fetch(data.results[0].url)
        .then(res => res.json())
        .then(data => console.log(data));
    })
    .catch(err => console.error(err));
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

const getPokemonWithPromise = async (): Promise<IPokemon> => // IPokemon tipinde return alacağımız için bu tipi tanımladık
  new Promise(async (resolve, reject) => {
    // Durum için geçerli Promise'i oluşturduk
    try {
      const list = await getPokemonList(); // fonksiyondan dönen değeri list değişekenine tanımladık
      const pokemon = await getThisPokemon(list.results[0].url); // listedeki 0 numaralı pokemunun verilerini pokemon değişkenine aktardık
      resolve(pokemon); // eğer sorun yoksa return olarak pokemon'u döndürdük. Promise için => (return = resolve)
    } catch (error) {
      reject(error); // eğer sorun varsa reject ile yakalayıp hatayı aldık.
    }
  });

export async function myPromise() {
  const pokemon = await getPokemonWithPromise(); // resolve olan pokemonu değişken içinde tanımladık
  console.log(pokemon.id, pokemon.name); // değişkendeki pokemon için bazı veriler yazdırdık
}
