import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

export default function FormAddLibro(props) {
    const [ error, setError ] = useState(false);
    const [ datos, setDatos ] = useState({
      isbn: "",
      title: "",
      subtitle: "",
      author: "",
      published: "",
      publisher: "",
      pages: 0,
      description: "",
      website: "",
      category: ""
    });
    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const enviarDatos = (e) => {
        e.preventDefault();
        if(datos.isbn != ""){
            props.onSubmit(datos);
            setError(false);
        }
        else
            setError(true);
    }
    return(
        <div className="w-75 mx-auto card">
            <form onSubmit={enviarDatos}>
                <div className='card-header'>
                    <h2 className='m w-100 text-center'>Insertar Nuevo Libro</h2>
                    {error ? (
                        <h5 className="text-danger text-center"> ISBN requerido</h5>
                    ): <></>}
                </div>
                <div className='card-body'>
                    <div>
                        <h5>Título: </h5><input className="w-100 rounded" type="text" name="title" onChange={handleInputChange}/>
                    </div>
                    <div className="mb-2">
                        <h5>Subtitilo: </h5><input className="w-100 rounded" type="text" name="subtitle" onChange={handleInputChange}/>
                    </div>
                    <div className='row mx-auto'>
                        <div className='col'>
                            <p> <strong>ISBN:</strong> <input className="w-100 rounded" type="text" name="isbn" onChange={handleInputChange}/></p>
                            <p> <strong>Autor:</strong> <input className="w-100 rounded" type="text" name="author" onChange={handleInputChange}/></p>
                            <p> <strong>Fecha publicación:</strong> <input className="w-100 rounded" type="fecha" name="published" onChange={handleInputChange}/></p>
                            <p> <strong>Editorial:</strong> <input className="w-100 rounded" type="text" name="publisher" onChange={handleInputChange}/></p>
                        </div>
                        <div className='col'>
                            <p> <strong>Páginas:</strong> <input className="w-100 rounded" type="text" name="pages" onChange={handleInputChange}/></p>
                            <p> <strong>Sitio web:</strong> <input className="w-100 rounded" type="text" name="website" onChange={handleInputChange}/></p>
                            <p> <strong>Categoría:</strong> <input className="w-100 rounded" type="text" name="category" onChange={handleInputChange}/></p>
                        </div>
                    </div>
                    <div className='bg-secondary rounded p-2'>
                        <p className='text-light'><strong>Descripción:</strong></p>
                        <p className='text-justify'><input className="w-100 rounded" type="text" name="description" onChange={handleInputChange}/></p>
                    </div>
                </div>
                <div className="w-100 text-center">
                    <button type="submit" className='btn btn-primary w-25 mx-auto'>
                        <FontAwesomeIcon icon={faFloppyDisk}/>
                    </button>
                </div>
            </form>
        </div>
    )
}