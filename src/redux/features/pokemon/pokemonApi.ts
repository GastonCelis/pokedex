import axios from 'axios';
import { URL_BACKEND } from '@/constants/constants'

export const getPokemonIdorName = (id: string | number) => {
    const request = axios({
        url: `${URL_BACKEND}/pokemon/${id}`,
        method: 'GET',
    })

    return request
}