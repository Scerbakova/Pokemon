import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useGetAllPokemonsQuery } from '../store/reducers/pokemon';

export const
  pokemonImageBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const Home = () => {
  const [amount, setAmount] = useState(20);
  const { data, isLoading, isSuccess } = useGetAllPokemonsQuery(amount);
  const navigate = useNavigate();

  return (
    <div className="wrapper row container-fluid">
      {isLoading && <span>Loading...</span>}
      {data && isSuccess && data.results.map(({ name, url }) => {
        const arr = url.split('/');
        const id = arr[arr.length - 2];
        return (
          <div className="col-xs-2" key={name}>
            <div className="pokemon__button--container">
              <button
                className="pokemon__button"
                key={Math.random()}
                onClick={() => {
                  navigate(`/pokemon/${id}`);
                }}
              >
                {name}
                <img
                  height="75"
                  src={`${pokemonImageBaseUrl}${id}.png`}
                  alt="pokemon"
                />
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <button
          className="btn__moves"
          onClick={() => {
            setAmount(amount + 20);
          }}
        >
          LOAD MORE POKEMONS
        </button>
      </div>
    </div>
  );
};

export default Home;
