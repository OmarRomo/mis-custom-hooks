import {useState} from "react";

export const useCounter = (inicialState=10) => {

        const [counter, setCounter] =useState(inicialState);

        const reset = () => { // se usa este reset para indicar que usaras su estado inicial que es =10
            setCounter(inicialState); //se usa el set state para modificar el estado en este caso se regresa al estado inicial
        }

        const increment = () => { //se crea un argumento con valor de uno
            setCounter(counter +1); // se usa el setstate para modificar el estado por lo que dentro se pone el estado y enb este caso se le suma el factor que es de valor uno
        }

        const decrement = () => { //se  le da un argumento con valor de uno
            setCounter(counter -1); // se usa el setstate para modificar el estado, dentro dse mete el estado al cual se le resta el factor que es de valor uno
        }


        return { // se usa el return para poder exportar la logica ya que no puedes exportar por partes lo que esta dentro de una funcion, exportas toda la funcion y pones el return para poder desfragmentar a donde quiera q exportes
            counter,
            increment,
            decrement,
            reset,
        }
}
