/* eslint-disable react-hooks/exhaustive-deps */
import useRedux from '@/hooks/useRedux';
import './pokeInfo.scss'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faCircle, faCircleInfo, faBahai, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getPokemonEvolutionAsync, getPokemonEvolutionInfoAsync, getPokemonSpecieInfoAsync } from '@/redux/features/pokemon/pokemonThunk';

const PokeInfo = () => {
    const { dispatch, selectors: { selectorPokemon } } = useRedux()
    const { pokemon, evolution, evolutionInfo, statusMessage, dataSearch } = selectorPokemon
    const [viewBack, setViewBack] = useState(false)
    const [viewShiny, setViewShiny] = useState(false)
    const [viewInfo, setViewInfo] = useState(false)
    const [animateDoor, setAnimateDoor] = useState(false)
    const spritePokemonFront = viewShiny ? pokemon?.sprites.other.showdown.front_shiny : pokemon?.sprites.other.showdown.front_default
    const spritePokemonBack = viewShiny ? pokemon?.sprites.other.showdown.back_shiny : pokemon?.sprites.other.showdown.back_default
    const typePokemon1 = pokemon?.types[0].type.name.toLowerCase()
    const typePokemon2 = pokemon?.types[1] ? pokemon?.types[1].type.name.toLowerCase() : pokemon?.types[0].type.name.toLowerCase()
    const namePokemon = `${pokemon?.name[0].toUpperCase()}${pokemon?.name.slice(1)}`
    const weightPokemon = pokemon?.weight / 10
    const heightPokemon = pokemon?.height / 10
    const evolutionPokemonName = `${evolution?.chain.evolves_to[0].species?.name[0].toUpperCase()}${evolution?.chain.evolves_to[0].species?.name.slice(1)}`
    const evolutionPokemonName2 = evolution?.chain.evolves_to[0].evolves_to.length > 0 ? `${evolution?.chain.evolves_to[0].evolves_to[0].species?.name[0].toUpperCase()}${evolution?.chain.evolves_to[0].evolves_to[0].species?.name.slice(1)}` : ''
    const nameCorrectEvolution = namePokemon === evolutionPokemonName ? evolutionPokemonName2 : evolutionPokemonName2 === namePokemon ? '' : evolutionPokemonName
    const spriteEvolutionFront = viewShiny ? evolutionInfo?.sprites.other.showdown.front_shiny : evolutionInfo?.sprites.other.showdown.front_default
    const spriteEvolutionBack = viewShiny ? evolutionInfo?.sprites.other.showdown.back_shiny : evolutionInfo?.sprites.other.showdown.back_default
    const idSpecie = pokemon?.species?.url.split('/')[pokemon?.species?.url.split('/').length - 2]

    useEffect(() => {
        dispatch(getPokemonSpecieInfoAsync(idSpecie))
        dispatch(getPokemonEvolutionAsync(dataSearch.evolutionId))
        nameCorrectEvolution !== '' && dispatch(getPokemonEvolutionInfoAsync(nameCorrectEvolution.toLowerCase()))
    }, [pokemon, dataSearch.evolutionId, nameCorrectEvolution, idSpecie])

    useEffect(() => {
        if (animateDoor) {
            setTimeout(() => {
                setAnimateDoor(false)
            }, 1100)
        }
    }, [animateDoor])

    const handleViewBack = () => {
        setAnimateDoor(true)
        setTimeout(() => {
            setViewBack(!viewBack)
        }, 600)
    }

    const handleViewShiny = () => {
        setAnimateDoor(true)
        setTimeout(() => {
            setViewShiny(!viewShiny)
        }, 600)
    }

    const handleViewInfo = () => {
        setAnimateDoor(true)
        setTimeout(() => {
            setViewInfo(!viewInfo)
        }, 600)
    }

    return (
        <div className='container-pokeInfo'>
            <div className='container-types'>
                <FontAwesomeIcon icon={faCircle} className={`type ${typePokemon1}`} />
                <FontAwesomeIcon icon={faCircle} className={`type ${typePokemon2}`} />
            </div>

            <div className='container-doors'>
                {
                    statusMessage === 'fulfilled' ?
                        viewInfo ?
                            <div className={`container-info`}>
                                <h3 className='name-pokemon'>{namePokemon}</h3>

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

                                    {
                                        nameCorrectEvolution !== '' ?
                                            <div className='evolution'>
                                                <picture className='picture-evolution'>
                                                    <img src={viewBack ? spritePokemonBack : spritePokemonFront} height={40} />
                                                    <p>{namePokemon}</p>
                                                </picture>

                                                <FontAwesomeIcon icon={faArrowRight} />

                                                <picture className='picture-evolution'>
                                                    <img src={viewBack ? spriteEvolutionBack : spriteEvolutionFront} height={40} />
                                                    <p>{nameCorrectEvolution}</p>
                                                </picture>
                                            </div>
                                            :
                                            <p className='no-evolution'>Sin evolución</p>
                                    }
                                </div>
                            </div>
                            :
                            <picture className={`container-img`}>
                                <img src={viewBack ? spritePokemonBack : spritePokemonFront} className='pokeImg' width={100} />
                            </picture>
                        :
                        statusMessage === 'pending' ?
                            <picture className={`container-img`}>
                                <p className='text-search-pokemon'>
                                    Buscando Pokémon...
                                </p>
                            </picture>
                            :
                            <picture className='box-search-fail'>
                                <p className='text-search-fail'>
                                    Pokémon no encontrado
                                </p>
                            </picture>
                }

                <div className={`door-left door-left-open ${animateDoor && 'door-close'}`}>
                    <div className='circle-door-left'></div>
                </div>
                <div className={`door-right door-right-open ${animateDoor && 'door-close'}`}>
                    <div className='circle-door-right'></div>
                </div>
            </div>

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