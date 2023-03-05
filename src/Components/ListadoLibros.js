import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from "react";
import DetalleLibro from "./DetalleLibro";


export default function ListadoLibros(props) {
    const [ jsonLibros, setLibros ] = useState(props.libros.books);
    const [ detalle, setVistaDetalle ] = useState(false);
    const [ libro, setLibro ] = useState({});

    function eliminarLibro (props){
        let listLibros = jsonLibros;
        for(let i = 0; i< listLibros.length; i++){
            if(listLibros[i].isbn == props){
                delete listLibros[i];
            }
        }
        let auxArray = new Array (listLibros.length -1);
        let j = 0;
        listLibros.forEach(libro => {
            auxArray[j] = libro;
            j++;
        });
        setLibros(auxArray);
    }
    function detalleLibro (props){
        setVistaDetalle(true);
        jsonLibros.forEach(libro => {
            if(libro.isbn == props){
                setLibro(libro);
            }
        });
    }

    function cerrarVista () {
        setVistaDetalle(false);
    };
    
    if (detalle){
        return(
            <DetalleLibro libro={libro} onClose={cerrarVista}/>
        )
    }
    return (
        <>
            <div className="row row-cols-3 w-75 g-3 mx-auto mt-0">
                {jsonLibros.map(libro => (
                    <div className="col" key={libro.isbn}>
                        <div className="card h-100" >
                            <div className="card-header d-flex">
                                <div className=' _list' onClick={()=>detalleLibro(libro.isbn)}>
                                    <FontAwesomeIcon icon={faBookOpen}/>
                                </div>
                                <h5 className="card-title w-100 text-center">{libro.title}</h5>
                                <div className='_papelera' onClick={()=>eliminarLibro(libro.isbn)}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Autor: {libro.author}</p>
                                <p className="card-text text-muted">Categoria: {libro.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div> 
        </>
    );
}