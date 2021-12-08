import { faCss3Alt, faGitAlt, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import React, { useState } from 'react';
import { userForms } from './CreatedCard';

const ListBooks = ({value, imgURL}) => {
    
    return(
    <>
        <span><image src={imgURL} alt="book-cover"></image></span>
        <p className="book-text" >{value}</p></>
    )
}
export function BookList(){



    const listBooks = userForms[1].favoriteBooks.map((book) => 
        <ListBooks value={book} />
        );
     return (<>{listBooks}</>)   
 }

export default function Header({ className, title, icon, text, knownTech, favBook, checkTech }){
    
    
    return(
        <>
             <div className={className}>
                <div className="title-box"><span className="fa-icon"><FontAwesomeIcon icon={icon} size="lg" /></span><h3>{title}</h3></div>
                {text && <div className="cc-text-box"><p className="small-text">{text}</p></div>}
                
                {knownTech && 
                    <>
                    <div className="mini-cards">
                      <span  className={`fa-icon-tech ${checkTech}`} title="CSS">
                        <FontAwesomeIcon icon={faCss3Alt}  />
                      </span>
                      <span className="fa-Icon-tech" title="HTML">
                        <FontAwesomeIcon icon={faHtml5} />
                      </span>
                      <span className="fa-Icon-tech" title="JS">
                        <FontAwesomeIcon icon={faJs} />
                      </span>
                      <span className="fa-Icon-tech" title="Git">
                        <FontAwesomeIcon icon={faGitAlt} />
                      </span>
                      <span className="fa-Icon-tech" title="Node JS">
                        <FontAwesomeIcon icon={faNodeJs} />
                      </span>
                      <span className="fa-Icon-tech" title="React">
                        <FontAwesomeIcon icon={faReact} />
                      </span>
                    </div>
                    </>
                }
                {favBook ? <BookList /> : <></>}
            </div>
        </>
    )
}