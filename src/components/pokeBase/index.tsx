import PokeHeader from '@/components/pokeHeader';
import Circuit from '@/components/circuit'
import PokeInfo from '@/components/pokeInfo'
import PokeActions from '@/components/pokeActions';
import BackgroundCircuit from '@/components/circuit/backgroundCircuit';
import './pokeBase.scss'

const PokeBase = () => {
    return (
        <div className='container-pokeBase'>
            <div className='box-circuit'>
                <PokeHeader />

                <Circuit />

                <BackgroundCircuit />

                <PokeInfo />

                <PokeActions />
            </div>
        </div>
    );
};

export default PokeBase;