import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './pokeHeader.scss'
import { faPowerOff, faMagnifyingGlass, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import useRedux from '@/hooks/useRedux';
import { getPokemonIdorNameAsync } from '@/redux/features/pokemon/pokemonThunk';
import { setFocusSearch, setPower, setPokemonSearchName } from '@/redux/features/pokemon/pokemonSlice';

const PokeHeader = () => {
    const { dispatch, selectors: { selectorPokemon } } = useRedux()
    const { statusMessage } = selectorPokemon

    const handleLight = () => {
        if (statusMessage === 'pending') {
            return 'circle-on-search'
        }

        if (statusMessage === 'fulfilled') {
            return 'circle-on-ok'
        }

        if (statusMessage === 'rejected') {
            return 'circle-on-error'
        }

        return 'circle-off'
    }

    const handleReset = () => {
        dispatch(getPokemonIdorNameAsync(1))
        dispatch(setPokemonSearchName(''))
        dispatch(setFocusSearch(false))
    }

    const handleSearch = () => {
        dispatch(setFocusSearch(true))
    }

    const handlePower = () => {
        dispatch(setPower(false))
    }

    return (
        <div className='header'>
            <div className='container-pokeHeader'>
                <div className='container-circle-on'>
                    <div className={`circle-on ${handleLight()}`}>
                        <div className='circle-on-min-1'>
                        </div>
                        <div className='circle-on-min-2'>
                        </div>
                    </div>
                </div>

                <div className='container-circle-action'>
                    <button className='circle-reset' onClick={handleReset}>
                        <FontAwesomeIcon icon={faRotateRight} />
                    </button>

                    <button className='circle-search' onClick={handleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                    <button className='circle-close' onClick={handlePower}>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokeHeader;