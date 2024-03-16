/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface IPokemonSlice {
    pokemon: any
    evolution: any
    evolutionInfo: any
    specieInfo: any
    dataSearch: {
        pokemonId: number
        evolutionId: number
        pokemonName: string
    }
    focusSearch: boolean
    power: boolean
    statusMessage: string
    statusMessageEvolution: string
    loading: boolean
}