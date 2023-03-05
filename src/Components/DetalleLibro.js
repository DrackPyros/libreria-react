import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function DetalleLibro(props) {
    const libro = props.libro;
    return(
        <div className="w-75 mx-auto card">
            <div className='card-header d-flex'>
                <div className='_papelera h2' onClick={props.onClose}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
                <h2 className='m w-100 text-center'>Titulo: {libro.title}</h2>
            </div>
            <div className='card-body'>
                <h5>Subtitilo: {libro.subtitle}</h5>
                <div className='row mx-auto'>
                    <div className='col'>
                        <p> <strong>ISBN:</strong> {libro.isbn}</p>
                        <p> <strong>Autor:</strong> {libro.author}</p>
                        <p> <strong>Fecha publicación:</strong> {libro.published.slice(0, 10)}</p>
                        <p> <strong>Editorial:</strong> {libro.publisher}</p>
                    </div>
                    <div className='col'>
                        <p> <strong>Páginas:</strong> {libro.pages}</p>
                        <p> <strong>Sitio web:</strong> <a href={libro.website} target="_blank">Link</a></p>
                        <p> <strong>Categoría:</strong> {libro.category}</p>
                    </div>
                </div>
                <div className='bg-secondary rounded p-2'>
                    <p className='text-light'><strong>Descripción:</strong></p>
                    <p className='text-justify'>{libro.description}</p>
                </div>
            </div>

        </div>
    )
}