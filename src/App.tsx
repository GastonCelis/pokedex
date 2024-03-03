import PokeBase from "./components/pokeBase"
import useRedux from "./hooks/useRedux"
import { getPokemonIdorNameAsync } from "./redux/features/pokemon/pokemonThunk"
import '@/app.scss'

function App() {
  const { dispatch, selectors: { selectorPokemon } } = useRedux()
  const { dataSearch, pokemon } = selectorPokemon
  const { pokemonId } = dataSearch

  return (
    <div className="container">
      <PokeBase />
    </div>
  )
}

export default App
