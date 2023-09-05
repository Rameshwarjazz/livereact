
import './Book.css'
function Book(props){
   const {img, titleName,authorName}=props
    return(
        <article className='book'>
            <img src={img} alt='Gita'/>
            <h2>{titleName}</h2>
            <h3>{authorName}</h3>
        </article>
    )
}
export default Book;