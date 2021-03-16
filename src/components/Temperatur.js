import React, {useContext} from 'react';
import {Context} from '../context';

function Temperatur() {
    const context = useContext(Context);
    const renderWetterTemp = () => {
        if(!context.wetter.main) {
            return '-';
        } else {
            return `${Math.floor(context.wetter.main.temp)}°C`;
        }
    }
    const renderGefuehlteTemp = () => {
        if(!context.wetter.main) {
            return '';
        } else {
            return `Gefühlt: ${Math.floor(context.wetter.main.feels_like)}°C`;
        }
    }

    return (
        <div className='temperatur' style={{visibility: Object.keys(context.wetter).length <= 0 ? 'hidden' : 'visible'}}>
            <p>{renderWetterTemp()}</p>
            <p className="gefuehlteTemp">{renderGefuehlteTemp()}</p>
        </div>
    )
}

export default Temperatur;