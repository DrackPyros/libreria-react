import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export default function ListadoLibros(props) {
    // console.log(props);
    return (
        <>
            {/* <h1 className="text-light">Libros Disponibles</h1> */}
            <div className="row row-cols-3 w-75 g-3 mx-auto mt-0">
                {props.libros.books.map(libro => (
                    <div className="col">
                        <div className="card h-100" key={libro.isbn}>
                            <div className="card-header d-flex">
                                <h5 className="card-title w-100">{libro.title}</h5>
                                <div className='text-right _papelera'>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Autor: {libro.author}</p>
                                <p class="card-text text-muted">Categoria: {libro.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        
        </>
    );
}