// Importa React y los hooks useState y useEffect
import React,{useState,useEffect} from "react";

// Componente Form: gestiona la entrada de texto del usuario para agregar o actualizar ítems
function Form({addOrUpdateItem,itemToEdit}){

    // Estado local que guarda el valor del input
    // Se inicializa como una cadena vacía
    // Cuando se edita un ítem, se actualizará con su valor 
    const[inputValue,setInputValue]=useState('');
    
    // Hook que se ejecuta cuando cambia itemToEdit
    // Si hay un ítem para editar, coloca su valor en el input
    // Si no, limpia el campo
    useEffect(() => {
        if(itemToEdit){
            setInputValue(itemToEdit.value);
        }else{
            setInputValue('');
        }
    },[itemToEdit]);

    // Función que se ejecuta al enviar el formulario
    // Evita que la página se recargue
    // Llama a addOrUpdateItem con el valor actual
    // Limpia el input luego de agregar/actualizar
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim()){
            addOrUpdateItem(inputValue);
            setInputValue('');
        }
    };

    // Renderiza el formulario con un input y un botón
    // El texto del botón cambia si se está editando o agregando
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">{itemToEdit ?
            'Actualizar':'Agregar'}
            </button>
        </form>
    );
}

// Exporta el componente para usarlo en otros archivos
export default Form;