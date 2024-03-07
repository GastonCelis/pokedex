import PokeHeader from '@/components/pokeHeader';
import Circuit from '@/components/circuit'
import PokeInfo from '@/components/pokeInfo'
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
            </div>
        </div>
    );
};

export default PokeBase;