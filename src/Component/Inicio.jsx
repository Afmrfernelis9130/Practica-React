import React,{useEffect,useState} from 'react';
import {allPersonajes} from "../functions/funciones";


const  Inicio= ()=> {

    const [personajes,setPersonajes] =useState(null)
    useEffect(() => {
       allPersonajes(setPersonajes)
    }, []);


    return (
        <>
            { personajes !== null ?
                (
                    personajes.map(personajes=>(
                        <div key={personajes.id}>
                            <a href={`/personaje/${personajes.id}`}> {personajes.name}</a>
                        </div>
                    ))

                ):
                ( ' no hay personajes')}



        </>
    );
}

export default Inicio;
