import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Ipokemon from '@/interfaces/redux/IPokemon'
import { getPokemonIdorNameAsync } from './pokemonThunk'

const initialState: Ipokemon = {
    allPokemons: [],
    pokemon: '',
    pokemonId: 1,
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
        setPokemonId: (state: Ipokemon, action: PayloadAction<number | string>) => {
            state.pokemonId = action.payload
        }
    },

    extraReducers: builder => {
        builder
            .addCase(getPokemonIdorNameAsync.pending, (state: Ipokemon) => {
                state.statusMessage = 'pending'
                state.loading = true
            })
            .addCase(getPokemonIdorNameAsync.fulfilled, (state: Ipokemon, action: PayloadAction<unknown>) => {
                state.pokemon = action.payload
                state.statusMessage = 'fulfilled'
                state.loading = false
            })
            .addCase(getPokemonIdorNameAsync.rejected, (state: Ipokemon) => {
                state.statusMessage = 'rejected'
                state.loading = false
            })
    }
})

export const {
    setPokemonId,
    refreshStatePokemon
} = pokemonSlice.actions

export default pokemonSlice.reducer