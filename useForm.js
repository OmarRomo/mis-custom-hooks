import {useState} from "react";

export const useForm = ( estadoInicial = {} ) => { //{} se deja etas llaves sin nada adentro pos sis e da el caso de que si no ponen nada en algun input no marquen un error

    const [values, setValues]= useState(estadoInicial)

    const reset= () => {        // se crea este reset para poder resetear el formulario
        setValues (estadoInicial)
    }

    const cambioDeEntrada = ({target}) => {

        setValues ({
            ...values, // por los 3 puntos Trae todo el arreglo formstate ya desestructurado delusestate
            [target.name]: target.value
        });

    }

    return [values, cambioDeEntrada, reset];
}
