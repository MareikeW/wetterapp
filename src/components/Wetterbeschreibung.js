import React, {useContext} from 'react';
import {Context} from '../context';

function Wetterbeschreibung() {
    const context = useContext(Context);
    const renderWetterDescription = () => {
        if(!context.wetter.weather) {
            return null;
        } else {
            let beschreibung = context.wetter.weather[0].description;
            let icon = context.wetter.weather[0].icon;
            return  <div>
                        <p>{beschreibung}</p>
                        <img src={'http://openweathermap.org/img/wn/' + icon + '@2x.png'} alt='Wetter-Icon' />
                    </div> 
        }
    }

    return (
        <div className='wetter'>
            {renderWetterDescription()}
        </div>
    )
}

export default Wetterbeschreibung;