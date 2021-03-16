import React, {useState, useEffect} from "react";
import wetterAPI from "./wetterAPI";
const Context = React.createContext();

function ContextProvider(props) {
    const [query, setQuery] = useState("");
    const [wetter, setWetter] = useState({});
    

    // Bei Start der App wird das Wetter für den aktuellen Standort automatisch angezeigt.
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function getPosition(pos){
            const koordinaten = pos.coords
            fetch(`${wetterAPI.base}weather?lat=${koordinaten.latitude}&lon=${koordinaten.longitude}&units=metric&appid=${wetterAPI.key}&lang=de`)
            .then(response => response.json())
            .then(data => {
                setWetter(data);
            });
        })
    },[])

    return (
        <Context.Provider value={{query, setQuery, wetter, setWetter}}>
            {props.children}
        </Context.Provider>
    )    
}

export {ContextProvider, Context};