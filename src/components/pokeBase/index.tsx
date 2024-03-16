import PokeHeader from '@/components/pokeHeader';
import Circuit from '@/components/circuit'
import PokeInfo from '@/components/pokeInfo'
import PokeActions from '@/components/pokeActions';
import BackgroundCircuit from '@/components/circuit/backgroundCircuit';
import './pokeBase.scss'
import useRedux from '@/hooks/useRedux';
import { setPower } from '@/redux/features/pokemon/pokemonSlice';

const PokeBase = () => {
    const { dispatch, selectors: { selectorPokemon } } = useRedux()
    const { power } = selectorPokemon

    const handlePowerOn = () => {
        dispatch(setPower(true))
    }

    return (
        <div className='container-pokeBase'>
            <div className='box-circuit'>
                <PokeHeader />

                <Circuit />

                <BackgroundCircuit />

                <PokeInfo />

                <PokeActions />
            </div>

            <div className={`cover-pokedex-left ${power && 'cover-pokedex-left-open'}`}></div>

            <div className={`cover-pokedex-right ${power && 'cover-pokedex-right-open'}`}></div>

            <div className={`circle-start ${power && 'circle-start-open'}`} onClick={handlePowerOn}>
                <div className='circle-start-in'>
                </div>
                <p className='text-circle-start'>
                    Iniciar
                </p>
            </div>
        </div>
    );
};

export default PokeBase;