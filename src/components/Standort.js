import React, {useContext} from 'react';
import {Context} from '../context';

function Standort() {
    const context = useContext(Context);
    const getStandort = () => {
        if(!context.wetter || !context.wetter.sys) {
            return null;
        } else {
            return `${context.wetter.name}, ${context.wetter.sys.country}`;
        }
    }

    // Gibt aktuelles Datum aus
    const getDatum = () => {
        var datum = new Date();
        // Gibt einen Wochentag und ein langes Datum zurück.
        var optionen = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        return `${datum.toLocaleDateString('de-DE', optionen)}`;
    }

    return (
        <div className="standort-container">
            <div className="standort">{getStandort()}</div>
            <div className="date">{getDatum()}</div>
        </div>
    )
}

export default Standort;