/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface IPokemonSlice {
    allPokemons: Array<any>
    pokemon: any
    dataSearch: {
        pokemonId: number
        pokemonName: string
    }
    pageNumber: number
    totalPages: number
    statusMessage: string
    loading: boolean
}