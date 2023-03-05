import './App.css';
import ListadoLibros from './Components/ListadoLibros';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBook } from '@fortawesome/free-solid-svg-icons';
import FormAddLibro from './Components/FormAddLibro';
import { useState, useEffect } from "react";

import JsonLibros from './Resources/books.json';

function App() { 
  const [ form, setForm ] = useState(false);
  const [ libros, setLibros ] = useState(JsonLibros);

    const setFormFalse = () => {
      setForm(false);
    }
    const setFormTrue = () => {
      setForm(true);
    }
  function cerrarForm () {
    setForm(false);
  };
  const getNuevoLibro = (childdata) => {
    setForm(false);
    libros.books.push(childdata)
  }

  return (
    <>
      <header className="bg-dark text-light d-flex">
        <div className='h1 d-flex'>
          <div className='mx-2 _insert' onClick={setFormTrue}>
            <FontAwesomeIcon icon={faPlus}/>
          </div>
          <div className='mx-2 _list' onClick={setFormFalse}>
            <FontAwesomeIcon icon={faBook}/>
          </div>
        </div>
        <h1 className='text-center m-0 w-100'>Librería</h1>
      </header>
      <div className='min-vh-100 _body'>
        { 
          form ? (
              <FormAddLibro onSubmit={getNuevoLibro} onClose={cerrarForm}/>
            ):
            <>
              <ListadoLibros libros={libros}/>
            </>
        }
      </div>
    </>
  );
}

export default App;
