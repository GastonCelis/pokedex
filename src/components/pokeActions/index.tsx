import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './pokeActions.scss'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const PokeActions = () => {
    return (
        <div className='container-actions-bot'>
            <input className='input-actions' />

            <div className='container-actions-buttons'>
                <button className='all-action-button action-button-left'>
                    <FontAwesomeIcon icon={faCaretUp} className='icon-action' />
                </button>

                <button className='all-action-button action-button-up'>
                    <FontAwesomeIcon icon={faCaretUp} className='icon-action' />
                </button>

                <button className='all-action-button action-button-right'>
                    <FontAwesomeIcon icon={faCaretUp} className='icon-action' />
                </button>

                <button className='all-action-button action-button-down'>
                    <FontAwesomeIcon icon={faCaretUp} className='icon-action' />
                </button>
            </div>
        </div>
    );
};

export default PokeActions;