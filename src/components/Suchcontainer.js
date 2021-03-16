import React, { useContext } from 'react';

import wetterAPI from '../wetterAPI';
import {Context} from '../context';
function Suchcontainer() {
    const context = useContext(Context);
    
    // Suchfunktion
    const suche = event => {
        if(event.key === "Enter") {
            fetch(`${wetterAPI.base}weather?q=${context.query}&units=metric&appid=${wetterAPI.key}&lang=de`)
                .then(response => response.json())
                .then(data => {
                    context.setWetter(data);
                    context.setQuery(''); 
                });
        }
    }

    return (
        <div className="suchcontainer">
            <input 
                type='text'
                className='suchfeld'
                placeholder='Suche nach...'
                onChange={event => context.setQuery(event.target.value)}
                value={context.query}
                onKeyPress={suche}
                />
        </div>
    )
}

export default Suchcontainer;