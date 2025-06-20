import React from "react";

// Componente Item: representa un solo ítem de la lista.
// Muestra el valor del ítem y ofrece botones para editar o eliminar.
function Item({item, deleteItem, editItem}) {
    return (
        <li>
            {/* Muestra el texto o contenido del ítem */}
            {item.value}
            {/* Botón para editar el ítem */}
            <button onClick={() => editItem(item)}>Editar</button>
            {/* Botón para eliminar el ítem */}
            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
        </li>
    )
}

export default Item;