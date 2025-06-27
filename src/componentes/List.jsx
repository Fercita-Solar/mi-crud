import React from "react";
import Item from './Item';

// Componente List: se encarga de renderizar todos los ítems que llegan como props.
// Mapea sobre el array de ítems y renderiza un componente Item para cada uno.
// También recibe funciones para eliminar y editar ítems, que se pasan a cada Item.
function List({items, deleteItem,editItem}){
return (
    <div className="card">
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <span>
                        <strong>{item.nombre}</strong> | {item.asignatura}<br />
                        Promedio: <strong>{item.promedio}</strong><br />
                        Escala: <em>{item.escala}</em>
                    </span>
                    <div>
                        <button onClick={() => editItem(item)}>Editar</button>
                        <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
}
export default List;