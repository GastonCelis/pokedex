import PokeHeader from '@/components/pokeHeader';
import Circuit from '@/components/circuit'
import PokeInfo from '@/components/pokeInfo'
import './pokeBase.scss'

const PokeBase = () => {
    return (
        <div className='container-pokeBase'>
            <PokeHeader />

            <Circuit />

            <PokeInfo />
        </div>
    );
};

export default PokeBase;