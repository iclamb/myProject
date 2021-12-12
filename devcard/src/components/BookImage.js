import { useState } from "react";

export default function BookImage({pic}){
    
    const[ imgURL, setImgURL ] = useState("");

    const textString = encodeURI(pic)
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${textString}`;

        fetch(API_URL)
        .then(data=> data.json())
        .then(jsonData => setImgURL(jsonData.items[0].volumeInfo.imageLinks.thumbnail))
        .catch(err => console.log(err))
        

    
    
    return(
    <img className="book-image" src={imgURL} alt={pic}></img>
    )
}


