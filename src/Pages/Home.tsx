import { useNavigate } from 'react-router';
import { useGetAllPokemonsQuery } from '../store/reducers/pokemon';

export const
  pokemonImageBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const Home = () => {
  const { data, isLoading, isSuccess } = useGetAllPokemonsQuery();
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
                  navigate(`/${name}`);
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
    </div>
  );
};

export default Home;
