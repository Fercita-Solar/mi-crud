import React from "react";
import Item from './Item';

// Componente List: se encarga de renderizar todos los ítems que llegan como props.
// Mapea sobre el array de ítems y renderiza un componente Item para cada uno.
// También recibe funciones para eliminar y editar ítems, que se pasan a cada Item.
function List({items, deleteItem,editItem}){
    return(
        <ul>
             {// Recorre el array de ítems y por cada uno crea un componente <Item />
                // Se le pasa:
                // - Una clave única (key) para ayudar a React a identificarlo
                // - El objeto item (con id y value)
                // - Las funciones deleteItem y editItem para que el <Item /> pueda llamarlas
            items.map((item)=>(
                <Item
                    key={item.id}
                    item={item}
                    deleteItem={deleteItem}
                    editItem={editItem}
                />
            ))}
        </ul>
    );
}
export default List;