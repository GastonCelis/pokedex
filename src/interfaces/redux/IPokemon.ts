/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface IPokemonSlice {
    allPokemons: Array<any>
    pokemon: any
    evolution: any
    evolutionInfo: any
    dataSearch: {
        pokemonId: number
        evolutionId: number
        pokemonName: string
    }
    pageNumber: number
    totalPages: number
    statusMessage: string
    loading: boolean
}