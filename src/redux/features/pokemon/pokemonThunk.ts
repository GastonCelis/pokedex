/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonIdorName, getPokemonEvolution, getPokemonEvolutionInfo, getPokemonSpecieInfo } from "./pokemonApi";

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

export const getPokemonEvolutionAsync = createAsyncThunk(
    'pokemon/getPokemonEvolution',
    async (id: number) => {
        try {
            const response = await getPokemonEvolution(id)
            return response.data
        } catch (error) {
            throw error
        }
    }
)

export const getPokemonEvolutionInfoAsync = createAsyncThunk(
    'pokemon/getPokemonEvolutionInfo',
    async (id: number | string) => {
        try {
            const response = await getPokemonEvolutionInfo(id)
            return response.data
        } catch (error) {
            throw error
        }
    }
)

export const getPokemonSpecieInfoAsync = createAsyncThunk(
    'pokemon/getPokemonSpecieInfo',
    async (id: string | number) => {
        try {
            const response = await getPokemonSpecieInfo(id)

            return response.data
        } catch (error) {
            throw error
        }
    }
)