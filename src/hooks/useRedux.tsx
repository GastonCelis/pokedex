import type { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const useRedux = () => {
    const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch()
    const selectorPokemon = useSelector((state: RootState) => state.pokemon)

    const selectors = {
        selectorPokemon
    }

    return { dispatch, selectors }
}

export default useRedux