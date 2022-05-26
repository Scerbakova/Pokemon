import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useGetAllPokemonsQuery, useGetPokemonByIdQuery, useGetPokemonByNameQuery } from '../store/reducers/pokemon';

const SinglePokemon = () => {
  // eslint-disable-next-line no-undef
  const [moves, setMoves] = useState<JSX.Element[]>();
  // const { name } = useParams();
  const { id } = useParams();
  // const { data, isLoading, isSuccess } = useGetPokemonByNameQuery(String(name));
  const { data, isLoading, isSuccess } = useGetPokemonByIdQuery(Number(id));
  const navigate = useNavigate();
  const prev = Number(id) - 1;
  const next = Number(id) + 1;

  return (
    <div className="pokemon row container-fluid center-xs">
      {isLoading && <span>Loading...</span>}
      <div><button className="pokemon__button" onClick={() => navigate('/')}>BACK</button></div>
      <div>
        <button
          className="pokemon__button"
          onClick={() => navigate(`/pokemon/${prev}`)}
        >
          Previous Pokemon
        </button>

      </div>
      <div className="col-xs-4">
        Single Pokemon:
        <div>
          <img src={`${data && isSuccess && data.sprites.other['official-artwork'].front_default}`} alt="pokemon" />
        </div>
      </div>
      <div className="col-xs-4">
        <div className="info">
          Name:
          {' '}
          {data && data.name}
        </div>
        <div className="info">
          Height:
          {' '}
          {data && data.height}
        </div>
        <div className="info">
          Weight:
          {' '}
          {data && data.weight}
        </div>
        <div>
          <button
            className="btn__moves"
            onClick={
          () => setMoves(data && data.moves.map((move) => <div key={Math.random()}>{move.move.name}</div>))
}
          >
            MOVES:

          </button>
        </div>
        <div className="info">
          {moves}
        </div>
      </div>
      <div><button className="pokemon__button" onClick={() => navigate(`/pokemon/${next}`)}>Next Pokemon</button></div>
    </div>
  );
};

export default SinglePokemon;
