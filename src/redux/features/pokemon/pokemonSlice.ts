/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import IPokemonSlice from '@/interfaces/redux/IPokemon'
import { getPokemonIdorNameAsync } from './pokemonThunk'

const initialState: IPokemonSlice = {
    allPokemons: [],
    pokemon: null,
    dataSearch: {
        pokemonId: 1,
        pokemonName: '',
    },
    pageNumber: 0,
    totalPages: 0,
    statusMessage: '',
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
    }
})

export const {
    setPokemonSearchId,
    refreshStatePokemon
} = pokemonSlice.actions

export default pokemonSlice.reducer