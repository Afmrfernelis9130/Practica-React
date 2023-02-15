import React,{useEffect} from 'react';
import {useParams} from "react-router-dom";
import {onePersonaje} from "../functions/funciones";


const Personaje = () => {

    const params = useParams();
    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        onePersonaje(params).id;
    }, []);



    return (
        <div>


        </div>
    );
}

export default Personaje;