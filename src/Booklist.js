import Book from './Book';
import './Booklist.css'
function Booklist(){
    const url="https://images-eu.ssl-images-amazon.com/images/I/91msEbTletL._AC_UL600_SR600,400_.jpg "
    const author ='Rameshwar'
    const title= 'Jay shree Krishna'
    return(
        <section className='booklist'>
            <Book img={url} authorName={author} titleName={title}/>
            <Book img={url} authorName={author} titleName={title}/>
            <Book img={url} authorName={author} titleName={title}/>
        </section>
    )
}
export default Booklist;