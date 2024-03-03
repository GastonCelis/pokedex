import './pokeHeader.scss'

const PokeHeader = () => {
    return (
        <div className='container-pokeHeader'>
            <div className='container-circle-on'>
                <div className='circle-on'></div>
            </div>
            <div className='circle-reset'></div>
            <div className='circle-search'></div>
            <div className='circle-close'></div>
        </div>
    );
};

export default PokeHeader;