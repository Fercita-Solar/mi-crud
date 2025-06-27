// Importa React y los hooks useState y useEffect
import React,{useState,useEffect} from "react";

// Componente Form: gestiona la entrada de texto del usuario para agregar o actualizar ítems
function Form({addOrUpdateItem,itemToEdit}){

    // Estado local que guarda el valor del input
    // Se inicializa como una cadena vacía
    // Cuando se edita un ítem, se actualizará con su valor 
    const[nombre,setNombre]=useState('');
    const[asignatura,setAsignatura]=useState('');
    const[promedio,setPromedio]=useState('');

    
    // Hook que se ejecuta cuando cambia itemToEdit
    // Si hay un ítem para editar, coloca su valor en el input
    // Si no, limpia el campo
    useEffect(() => {
        if(itemToEdit){
            setNombre(itemToEdit.nombre);
            setAsignatura(itemToEdit.asignatura);
            setPromedio(itemToEdit.promedio);
        }
    },[itemToEdit]);

    // Función que se ejecuta al enviar el formulario
    // Evita que la página se recargue
    // Llama a addOrUpdateItem con el valor actual
    // Limpia el input luego de agregar/actualizar
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!nombre.trim()|| !asignatura.trim() || !promedio.trim()) {
            alert('Por favor, completa todos los campos');
            return;
        }
        const promedioNum = parseFloat(promedio);
        if (isNaN(promedioNum) || promedioNum < 1 || promedioNum > 7) {
            alert('El promedio debe ser un número entre 1.0 y 7.0');
            return;
        }
        addOrUpdateItem({nombre,asignatura,promedio:promedioNum});
        setNombre('');
        setAsignatura('');
        setPromedio('');
    };

    // Renderiza el formulario con un input y un botón
    // El texto del botón cambia si se está editando o agregando
    return(
        <div className="card">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre del estudiante"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Asignatura"
                    value={asignatura}
                    onChange={(e) => setAsignatura(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Promedio"
                    step="0.1"
                    min="1.0"
                    max="7.0"
                    value={promedio}
                    onChange={(e) => setPromedio(e.target.value)}
                />
                {/* Botón para enviar el formulario */}
                <button type="submit">{itemToEdit ?
                'Actualizar':'Agregar'}
                </button>
            </form>
        </div>
    );
}

// Exporta el componente para usarlo en otros archivos
export default Form;