import React from 'react';
import Suchcontainer from './Suchcontainer';
import Standort from './Standort';
import Temperatur from "./Temperatur";
import Wetterbeschreibung from "./Wetterbeschreibung";
function Main() {
    return (
        <main>
            <Suchcontainer />
            <Standort />
            <Temperatur />
            <Wetterbeschreibung />
        </main>
    )
}

export default Main;