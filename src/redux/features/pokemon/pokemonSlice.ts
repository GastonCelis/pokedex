/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import IPokemonSlice from '@/interfaces/redux/IPokemon'
import { getPokemonIdorNameAsync, getPokemonEvolutionAsync, getPokemonEvolutionInfoAsync, getPokemonSpecieInfoAsync } from './pokemonThunk'

const initialState: IPokemonSlice = {
    pokemon: null,
    evolution: null,
    evolutionInfo: null,
    specieInfo: null,
    dataSearch: {
        pokemonId: 1,
        evolutionId: 1,
        pokemonName: '',
    },
    focusSearch: false,
    power: false,
    statusMessage: '',
    statusMessageEvolution: '',
    loading: false
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        refreshStatePokemon: () => initialState,
        setPokemonSearchId: (state: IPokemonSlice, action: PayloadAction<number>) => {
            state.dataSearch.pokemonId = action.payload
        },
        setPokemonSearchName: (state: IPokemonSlice, action: PayloadAction<string>) => {
            state.dataSearch.pokemonName = action.payload
        },
        setFocusSearch: (state: IPokemonSlice, action: PayloadAction<boolean>) => {
            state.focusSearch = action.payload
        },
        setPower: (state: IPokemonSlice, action: PayloadAction<boolean>) => {
            state.power = action.payload
        }
    },

    extraReducers: builder => {
        builder
            .addCase(getPokemonIdorNameAsync.pending, (state: IPokemonSlice) => {
                state.statusMessage = 'pending'
                state.loading = true
            })
            .addCase(getPokemonIdorNameAsync.fulfilled, (state: IPokemonSlice, action: PayloadAction<any>) => {
                state.pokemon = action.payload
                state.dataSearch.pokemonId = action.payload.id
                state.statusMessage = 'fulfilled'
                state.loading = false
            })
            .addCase(getPokemonIdorNameAsync.rejected, (state: IPokemonSlice) => {
                state.statusMessage = 'rejected'
                state.loading = false
            })

            .addCase(getPokemonEvolutionAsync.pending, (state: IPokemonSlice) => {
                state.statusMessageEvolution = 'pending'
                state.loading = true
            })
            .addCase(getPokemonEvolutionAsync.fulfilled, (state: IPokemonSlice, action: PayloadAction<any>) => {
                state.evolution = action.payload
                state.statusMessageEvolution = 'fulfilled'
                state.loading = false
            })
            .addCase(getPokemonEvolutionAsync.rejected, (state: IPokemonSlice) => {
                state.statusMessageEvolution = 'rejected'
                state.loading = false
            })

            .addCase(getPokemonEvolutionInfoAsync.pending, (state: IPokemonSlice) => {
                state.statusMessageEvolution = 'pending'
                state.loading = true
            })
            .addCase(getPokemonEvolutionInfoAsync.fulfilled, (state: IPokemonSlice, action: PayloadAction<any>) => {
                state.evolutionInfo = action.payload
                state.statusMessageEvolution = 'fulfilled'
                state.loading = false
            })
            .addCase(getPokemonEvolutionInfoAsync.rejected, (state: IPokemonSlice) => {
                state.statusMessageEvolution = 'rejected'
                state.loading = false
            })

            .addCase(getPokemonSpecieInfoAsync.pending, (state: IPokemonSlice) => {
                state.statusMessage = 'pending'
                state.loading = true
            })
            .addCase(getPokemonSpecieInfoAsync.fulfilled, (state: IPokemonSlice, action: PayloadAction<any>) => {
                const idEvolution = action.payload.evolution_chain.url.split('/')[action.payload.evolution_chain.url.split('/').length - 2]
                state.dataSearch.evolutionId = idEvolution
                state.statusMessage = 'fulfilled'
                state.loading = false
            })
            .addCase(getPokemonSpecieInfoAsync.rejected, (state: IPokemonSlice) => {
                state.statusMessage = 'rejected'
                state.loading = false
            })
    }
})

export const {
    refreshStatePokemon,
    setPokemonSearchName,
    setPokemonSearchId,
    setFocusSearch,
    setPower
} = pokemonSlice.actions

export default pokemonSlice.reducer