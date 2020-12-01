import {useState, useEffect, useRef} from "react";

export const useFetch = (url) => {

    const montado = useRef (true);// el  montado indica que se mantenga la referencia cuando el componente que lo usa siga montado por eso es que se le pone el true asi al cambiarlos valores del montado no se renderizara si no solo se cambiara una referencia al valor
    const [state, setState] = useState({data:null, loading: true, error: null });

    useEffect( () => {

        return () => {
            montado.current = false; // en el return se indica que si el evento se desmonta osea se pierde el true poder cambiar a falso sin que marque un error entonces no se volvera a renderizar si no solo se manteiene la referencia al mismo monmtado
        }

    },[])


    useEffect( () => {
        setState({data:null, loading: true, error: null });
        fetch(url)
            .then(respuesta => respuesta.json() )// el them nos regresa una promesa
            .then(data => { // el them regresa una promesa


                    if (montado.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }
            })
            .catch( () => { //los catch se usan para detectar el error en el dado caso de que al cargar no se realice entonces loading cambia a falso por ende data estara en null al no haber cargado y aparecera el mensaje de que no se pudo cargar
                setState({
                    data: null,
                    loading: false,
                    error:"No se pudo cargar la info"
                });
            });
    },[url]);


    return state;

}
