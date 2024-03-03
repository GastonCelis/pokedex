import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './pokeHeader.scss'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const PokeHeader = () => {
    return (
        <div className='container-pokeHeader'>
            <div className='container-circle-on'>
                <div className='circle-on'>
                    <div className='circle-on-min-1'>
                    </div>
                    <div className='circle-on-min-2'>
                    </div>
                </div>
            </div>

            <div className='container-circle-action'>
                <button className='circle-reset'></button>
                <button className='circle-search'></button>
                <button className='circle-close'>
                    <FontAwesomeIcon icon={faPowerOff} />
                </button>
            </div>
        </div>
    );
};

export default PokeHeader;