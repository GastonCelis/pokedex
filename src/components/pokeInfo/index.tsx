import useRedux from '@/hooks/useRedux';
import './pokeInfo.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faCircle } from '@fortawesome/free-solid-svg-icons';

const PokeInfo = () => {
    const { selectors: { selectorPokemon } } = useRedux()
    const { pokemon } = selectorPokemon
    const spritePokemonFront = pokemon?.sprites.other.showdown.front_default
    const spritePokemonBack = pokemon?.sprites.other.showdown.back_default
    const typePokemon1 = pokemon?.types[0].type.name.toLowerCase()
    const typePokemon2 = pokemon?.types[1] ? pokemon?.types[1].type.name.toLowerCase() : pokemon?.types[0].type.name.toLowerCase()
    const [viewBack, setViewBack] = useState(false)
    console.log(pokemon)
    const handleViewBack = () => {
        setViewBack(!viewBack)
    }

    return (
        <div className='container-pokeInfo'>
            <div className='container-types'>
                <FontAwesomeIcon icon={faCircle} className={`type ${typePokemon1}`} />
                <FontAwesomeIcon icon={faCircle} className={`type ${typePokemon2}`} />
            </div>

            <picture className='container-img'>
                <img src={viewBack ? spritePokemonBack : spritePokemonFront} className='pokeImg' width={100} />
            </picture>

            <div className='actions-pokeInfo'>
                <button onClick={handleViewBack} className='button-view-back'>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                </button>
            </div>
        </div>
    );
};

export default PokeInfo;