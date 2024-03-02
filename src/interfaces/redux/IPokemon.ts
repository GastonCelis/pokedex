export default interface IPokemon {
    allPokemons: Array<unknown>
    pokemon: unknown
    pokemonId: number | string
    pageNumber: number
    totalPages: number
    statusMessage: string
    loading: boolean
}