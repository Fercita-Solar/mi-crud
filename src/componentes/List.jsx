import React from "react";
import Item from './Item';

// Componente List: se encarga de renderizar todos los ítems que llegan como props.
// Mapea sobre el array de ítems y renderiza un componente Item para cada uno.
// También recibe funciones para eliminar y editar ítems, que se pasan a cada Item.
// Componente List: renderiza la lista de evaluaciones
function List({ items, deleteItem, editItem }) {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {items.map((item) => (
                <div className="card card-list" key={item.id}>
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span style={{ textAlign: "center", marginBottom: "1em" }}>
                            <strong>{item.nombre}</strong> | {item.asignatura}<br />
                            Promedio: <strong>{item.promedio}</strong><br />
                            Escala: <em>{item.escala}</em>
                        </span>
                        <div style={{ display: "flex", gap: "1em", justifyContent: "center" }}>
                            <button onClick={() => editItem(item)}>Editar</button>
                            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;