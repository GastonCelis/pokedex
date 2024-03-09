/* eslint-disable react-hooks/exhaustive-deps */
import useRedux from '@/hooks/useRedux';
import './pokeInfo.scss'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faCircle, faCircleInfo, faBahai, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getPokemonEvolutionAsync, getPokemonEvolutionInfoAsync } from '@/redux/features/pokemon/pokemonThunk';

const PokeInfo = () => {
    const { dispatch, selectors: { selectorPokemon } } = useRedux()
    const { pokemon, evolution, evolutionInfo } = selectorPokemon
    const [viewBack, setViewBack] = useState(false)
    const [viewShiny, setViewShiny] = useState(false)
    const [viewInfo, setViewInfo] = useState(false)
    const spritePokemonFront = viewShiny ? pokemon?.sprites.other.showdown.front_shiny : pokemon?.sprites.other.showdown.front_default
    const spritePokemonBack = viewShiny ? pokemon?.sprites.other.showdown.back_shiny : pokemon?.sprites.other.showdown.back_default
    const typePokemon1 = pokemon?.types[0].type.name.toLowerCase()
    const typePokemon2 = pokemon?.types[1] ? pokemon?.types[1].type.name.toLowerCase() : pokemon?.types[0].type.name.toLowerCase()
    const namePokemon = `${pokemon?.name[0].toUpperCase()}${pokemon?.name.slice(1)}`
    const weightPokemon = pokemon?.weight / 10
    const heightPokemon = pokemon?.height / 10
    const evolutionPokemonName = `${evolution?.chain.evolves_to[0].species.name[0].toUpperCase()}${evolution?.chain.evolves_to[0].species.name.slice(1)}`
    const spriteEvolutionFront = viewShiny ? evolutionInfo?.sprites.other.showdown.front_shiny : evolutionInfo?.sprites.other.showdown.front_default
    const spriteEvolutionBack = viewShiny ? evolutionInfo?.sprites.other.showdown.back_shiny : evolutionInfo?.sprites.other.showdown.back_default

    useEffect(() => {
        pokemon?.id && dispatch(getPokemonEvolutionAsync(pokemon?.id))
    }, [pokemon])

    useEffect(() => {
        evolution?.id && dispatch(getPokemonEvolutionInfoAsync(evolution?.chain.evolves_to[0].species.name))
    }, [evolution])

    const handleViewBack = () => {
        setViewBack(!viewBack)
    }

    const handleViewShiny = () => {
        setViewShiny(!viewShiny)
    }

    const handleViewInfo = () => {
        setViewInfo(!viewInfo)
    }

    return (
        <div className='container-pokeInfo'>
            <div className='container-types'>
                <FontAwesomeIcon icon={faCircle} className={`type ${typePokemon1}`} />
                <FontAwesomeIcon icon={faCircle} className={`type ${typePokemon2}`} />
            </div>

            {
                viewInfo ?
                    <div className={`container-info`}>
                        <h3>{namePokemon}</h3>

                        <div className='box-info'>
                            <div className='info'>
                                <p className='text-info'>{typePokemon1 === typePokemon2 ? typePokemon1.toUpperCase() : `${typePokemon1.toUpperCase()} - ${typePokemon2.toUpperCase()}`}</p>
                                <p className='text-data'>Tipo</p>
                            </div>

                            <div className='info'>
                                <p className='text-info'>{`${weightPokemon}kg`}</p>
                                <p className='text-data'>Peso</p>
                            </div>

                            <div className='info'>
                                <p className='text-info'>{`${heightPokemon}m`}</p>
                                <p className='text-data'>Altura</p>
                            </div>
                        </div>

                        <hr className='divider' />

                        <div className='box-evolution'>
                            <h3>Evolución</h3>

                            <div className='evolution'>
                                <picture className='picture-evolution'>
                                    <img src={viewBack ? spritePokemonBack : spritePokemonFront} height={40} />
                                    <p>{namePokemon}</p>
                                </picture>

                                <FontAwesomeIcon icon={faArrowRight} />

                                <picture className='picture-evolution'>
                                    <img src={viewBack ? spriteEvolutionBack : spriteEvolutionFront} height={40} />
                                    <p>{evolutionPokemonName}</p>
                                </picture>
                            </div>
                        </div>

                        <div className='glass'></div>
                    </div>
                    :
                    <picture className={`container-img`}>
                        <img src={viewBack ? spritePokemonBack : spritePokemonFront} className='pokeImg' width={100} />
                    </picture>
            }

            <div className='actions-pokeInfo'>
                <button className={`button button-info-off ${viewInfo && 'button-info-on'}`} onClick={handleViewInfo}>
                    <FontAwesomeIcon icon={faCircleInfo} className='icon' />
                </button>

                <button onClick={handleViewBack} className='button button-view-back'>
                    <FontAwesomeIcon icon={faArrowsRotate} className='icon' />
                </button>

                <button className={`button button-info-off ${viewShiny && 'button-shiny-on'}`} onClick={handleViewShiny}>
                    <FontAwesomeIcon icon={faBahai} className='icon' />
                </button>
            </div>
        </div>
    );
};

export default PokeInfo;