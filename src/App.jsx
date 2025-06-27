// Importa React y los hooks necesarios
import React, {useState,useEffect} from "react"

// Importa los componentes hijos y estilos
import Form from './componentes/Form';
import List from './componentes/List';
import './App.css'
import { use } from 'react';

// Componente principal App: maneja la lógica central del CRUD
function App() {
  // Estado para guardar los ítems de la lista
  // Utiliza useState para inicializar un array vacío
  // También maneja el ítem que se está editando
  // Si hay un ítem en edición, se guarda en itemToEdit
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  // useEffect para cargar datos guardados en localStorage al iniciar la app
  // Al montar el componente, intenta recuperar los ítems del localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // useEffect para guardar los ítems en localStorage cada vez que cambian
  // Convierte el array de ítems a JSON y lo guarda en localStorage
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Funciones para agregar, actualizar, eliminar y editar ítems
  // addOrUpdateItem: agrega un nuevo ítem o actualiza uno existente
  // Si hay un ítem en edición, lo actualiza; si no, crea uno nuevo con un ID único
  // deleteItem: elimina un ítem por su ID
  const calcularEscala = (promedio) => {
    const escala = parseFloat(promedio);
    if (escala >= 1 && escala < 4) return 'Deficiente';
    if (escala >= 4.1 && escala < 5.5) return 'Con mejora';
    if (escala >= 5.5 && escala < 6.4) return 'Buen trabajo';
    return 'Destacado';
  };
  const addOrUpdateItem = (value) => {
    const escala = calcularEscala(value.promedio);
    const newItem = { ...value, escala };
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, ...newItem } : item));
      setItemToEdit(null);
    } else {
      newItem.id = Date.now();  
      setItems([...items, newItem]);
    }
  };

  // Función para eliminar un ítem según su ID
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Función para seleccionar un ítem a editar
  // Al hacer clic en "Editar", se establece el ítem a editar en el estado
  // Esto permite que el formulario se llene con los datos del ítem seleccionado
  const editItem = (item) => {
    setItemToEdit(item);
  };

  // Renderiza la aplicación con los componentes Form y List
  return (

    <div className="App">
      <h1> Evaluación de Alumnos </h1>

     {/* Componente de formulario: recibe función para agregar/actualizar y el ítem a editar */}
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      {/* Componente de lista: recibe los ítems y funciones para eliminar y editar */}
      {/* Muestra todos los ítems y permite interactuar con ellos */}
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
      
  );
}

export default App
