import BookImage from "./BookImage";
const ListBooks = ({value}) => {
    return(
        
        <div className="book-container">
            <BookImage pic={value} /><p className="book-text" >{value}</p>
        </div>
    )
}

export default function CheckBooks({ books }){
    
    
    
    const listBooks = books.map((book) =>
            <ListBooks value={book} />
                             );

    return (<>{listBooks}</>)   






}
