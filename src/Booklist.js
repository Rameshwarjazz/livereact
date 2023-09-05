import Book from './Book';
import './Booklist.css'
function Booklist(){
    const firstBook={
        url:"https://images-eu.ssl-images-amazon.com/images/I/91msEbTletL._AC_UL600_SR600,400_.jpg ",
        author:'A.C. Bhaktivendanta Swami Prabhupada',
        title: 'Shrimad Bhagwat Geeta Yatharoop'
    }
    const secondBook={
        url:"https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL600_SR600,400_.jpg",
        author:'Joseph Nguyen',
        title: 'Dont Believe Everything You Think '
    }
    const thirdBook={
        url:"https://images-eu.ssl-images-amazon.com/images/I/51eQfae7ZpL._AC_UL600_SR600,400_.jpg",
        author:'Kailash Manju Bishnoi',
        title: 'UPSC Wala Love - Collector Sahiba '
    }
    
    return(
        <section className='booklist'>
            <Book img={firstBook.url} authorName={firstBook.author} titleName={firstBook.title}/>
            <Book img={secondBook.url} authorName={secondBook.author} titleName={secondBook.title}/>
            <Book img={thirdBook.url} authorName={thirdBook.author} titleName={thirdBook.title}/>
        </section>
    )
}
export default Booklist;