import './App.css';
import ListadoLibros from './Components/ListadoLibros';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBook } from '@fortawesome/free-solid-svg-icons';
import DetalleLibros from './Components/DetalleLibro';

import libros from './Resources/books.json';
function App() {
  return (
    <>
      <header className="bg-dark text-light d-flex">
        <div className='h1 d-flex'>
          <div className='mx-2 _insert'>
            <FontAwesomeIcon icon={faPlus}/>
          </div>
          <div className='mx-2 _list'>
            <FontAwesomeIcon icon={faBook}/>
          </div>
        </div>
        <h1 className='text-center m-0 w-100'>Librería</h1>
      </header>
      <body className='min-vh-100 _body'>
        { 
          libros ? (
            <ListadoLibros libros={libros} />
          ):
            <>
              <button /* onClick={regApi} */ className="btn-search">Buscar Personajes</button>
            </>
        }


      </body>
    </>
  );
}

export default App;
