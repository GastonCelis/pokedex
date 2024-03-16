/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import './pokeActions.scss'
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons';
import useRedux from '@/hooks/useRedux';
import { getPokemonIdorNameAsync } from '@/redux/features/pokemon/pokemonThunk';
import { setFocusSearch, setPokemonSearchName } from '@/redux/features/pokemon/pokemonSlice';

const PokeActions = () => {
    const { dispatch, selectors: { selectorPokemon } } = useRedux()
    const { pokemon, focusSearch, dataSearch } = selectorPokemon
    const inputRef: any = useRef(null)

    useEffect(() => {
        if (focusSearch && inputRef.current) {
            inputRef.current.focus()
            dispatch(setFocusSearch(false))
        }
    }, [focusSearch]);

    const handleUp = () => {
        pokemon?.id && dispatch(getPokemonIdorNameAsync(pokemon?.id + 10))
        dispatch(setPokemonSearchName(''))
    }

    const handleDown = () => {
        if (pokemon?.id >= 11) {
            pokemon?.id && dispatch(getPokemonIdorNameAsync(pokemon?.id - 10))
            dispatch(setPokemonSearchName(''))
        } else {
            pokemon?.id && dispatch(getPokemonIdorNameAsync(1))
            dispatch(setPokemonSearchName(''))
        }
    }

    const handleLeft = () => {
        if (pokemon?.id > 1) {
            pokemon?.id && dispatch(getPokemonIdorNameAsync(pokemon?.id - 1))
            dispatch(setPokemonSearchName(''))
        }
    }

    const handleRight = () => {
        pokemon?.id && dispatch(getPokemonIdorNameAsync(pokemon?.id + 1))
        dispatch(setPokemonSearchName(''))
    }

    const handleSearchInput = (event: any) => {
        dispatch(setPokemonSearchName(event.target.value))
    }

    const handleEnterSearch = (event: any) => {
        if (event.key === 'Enter' && dataSearch.pokemonName != '') {
            dispatch(getPokemonIdorNameAsync(dataSearch.pokemonName))
        }
    }

    const handleSearch = () => {
        dataSearch.pokemonName != '' && dispatch(getPokemonIdorNameAsync(dataSearch.pokemonName))
    }

    return (
        <div className='container-actions-bot'>
            <div className='container-search'>
                <input className='input-actions' ref={inputRef} onChange={handleSearchInput} onKeyDown={handleEnterSearch} value={dataSearch.pokemonName} />
                <button onClick={handleSearch} className='button-search'>
                    <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} className='icon-search' />
                </button>
            </div>

            <div className='container-actions-buttons'>
                <button className='all-action-button action-button-left' onClick={handleLeft}>
                    <FontAwesomeIcon icon={faCaretUp} className='icon-action' />
                </button>

                <button className='all-action-button action-button-up' onClick={handleUp}>
                    <FontAwesomeIcon icon={faCaretUp} className='icon-action' />
                </button>

                <button className='all-action-button action-button-right' onClick={handleRight}>
                    <FontAwesomeIcon icon={faCaretUp} className='icon-action' />
                </button>

                <button className='all-action-button action-button-down' onClick={handleDown}>
                    <FontAwesomeIcon icon={faCaretUp} className='icon-action' />
                </button>
            </div>
        </div>
    );
};

export default PokeActions;