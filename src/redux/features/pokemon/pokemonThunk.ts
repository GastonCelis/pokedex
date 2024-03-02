/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonIdorName } from "./pokemonApi";

export const getPokemonIdorNameAsync = createAsyncThunk(
    'pokemon/getPokemonIdorName',
    async (id: string | number) => {
        try {
            const response = await getPokemonIdorName(id)
            return response.data
        } catch (error) {
            throw error
        }
    }
)