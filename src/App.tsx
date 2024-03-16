/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import PokeBase from "./components/pokeBase"
import useRedux from "./hooks/useRedux"
import { getPokemonIdorNameAsync } from "./redux/features/pokemon/pokemonThunk"
import '@/app.scss'

function App() {
  const { dispatch } = useRedux()

  useEffect(() => {
    dispatch(getPokemonIdorNameAsync(1))
  }, [])

  return (
    <div className="container">
      <PokeBase />
    </div>
  )
}

export default App
