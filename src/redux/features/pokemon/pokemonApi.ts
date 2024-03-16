import axios from 'axios';
import { URL_BACKEND } from '@/constants/constants'

export const getPokemonIdorName = (id: string | number) => {
    const request = axios({
        url: `${URL_BACKEND}/pokemon/${id}`,
        method: 'GET',
    })

    return request
}

export const getPokemonEvolution = (id: number) => {
    const request = axios({
        url: `${URL_BACKEND}/evolution-chain/${id}`,
        method: 'GET',
    })

    return request
}

export const getPokemonEvolutionInfo = (id: number | string) => {
    const request = axios({
        url: `${URL_BACKEND}/pokemon/${id}`,
        method: 'GET',
    })

    return request
}

export const getPokemonSpecieInfo = (id: string | number) => {
    const request = axios({
        url: `https://pokeapi.co/api/v2/pokemon-species/${id}/`,
        method: 'GET',
    })

    return request
} 