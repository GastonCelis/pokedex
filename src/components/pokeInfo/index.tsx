import useRedux from '@/hooks/useRedux';
import './pokeInfo.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const PokeInfo = () => {
    const { selectors: { selectorPokemon } } = useRedux()
    const { pokemon } = selectorPokemon
    const spritePokemonFront = pokemon?.sprites.other.showdown.front_default
    const spritePokemonBack = pokemon?.sprites.other.showdown.back_default
    const [viewBack, setViewBack] = useState(false)
    console.log(pokemon)
    const handleViewBack = () => {
        setViewBack(!viewBack)
    }

    return (
        <div className='container-pokeInfo'>
            <picture className='container-img'>
                <img src={viewBack ? spritePokemonBack : spritePokemonFront} className='pokeImg' width={100} />
            </picture>

            <button onClick={handleViewBack} className='button-view-back'>
                <FontAwesomeIcon icon={faArrowsRotate} />
            </button>
        </div>
    );
};

export default PokeInfo;