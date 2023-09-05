
import './Book.css'
function Book(props){
    return(
        <article className='book'>
            <img src={props.img} alt='Gita'/>
            <h2>{props.titleName}</h2>
            <h3>{props.authorName}</h3>
        </article>
    )
}
export default Book;