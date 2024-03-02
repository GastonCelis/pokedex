import useRedux from "./hooks/useRedux"
import { getPokemonIdorNameAsync } from "./redux/features/pokemon/pokemonThunk"

function App() {
  const { dispatch, selectors: { selectorPokemon } } = useRedux()
  const { pokemonId } = selectorPokemon

  return (
    <>
      <div>pokedex</div>
      <button onClick={() => dispatch(getPokemonIdorNameAsync(pokemonId))}>Get pokemon</button>
    </>
  )
}

export default App
