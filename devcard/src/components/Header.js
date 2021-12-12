import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import BookList from './CheckBooks';
import  CheckBooks from './CheckBooks';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';



export default function Header({ className, title, icon, text, favBook, checkTech, gitLink, webLink, fbl, html, css, js, react, jsnode, git }){
   
    
    return(
        <>
            <div className={className}>
                    <div className="title-box">
                        <span className="fa-icon">
                            <FontAwesomeIcon icon={icon} size="lg" />
                        </span>
                        <h3>{title}</h3>
                   
            </div>
            {gitLink ?  <div className="mini-cards connect">
                                <span className="fa-icon-tech">
                                    <a href={gitLink} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                                </span>
                                <span className="fa-icon-tech">
                                    <a href={webLink} target="_blank"><FontAwesomeIcon icon={faGlobe} /></a>
                                </span>
                        </div> :
             null}
            {text && <div className="cc-text-box"><p className="small-text">{text}</p></div>}
            {checkTech ? 
                <div className="mini-cards">
                    {html ? <span class="fa-Icon-tech" title="html">
                       <FontAwesomeIcon icon={faHtml5} />
                    </span> : null}
                    {css ?
                    <span className="fa-Icon-tech" title="css">
                        <FontAwesomeIcon icon={faCss3Alt}  />
                    </span> : null
                    }
                    {js ?
                    <span className="fa-Icon-tech" title="js">
                        <FontAwesomeIcon icon={faJs}   />
                    </span> : null}
                    {git ?  
                    <span className="fa-Icon-tech" title="git">
                        <FontAwesomeIcon icon={faGitAlt} />
                    </span> : null}
                    {jsnode ?
                    <span className="fa-Icon-tech" title="jsnode">
                        <FontAwesomeIcon icon={faNodeJs} />
                    </span> : null}
                    {react ?
                    <span className="fa-Icon-tech" title="React">
                        <FontAwesomeIcon icon={faReact} />
                    </span> : null}
                </div> :
            null}
            {favBook ? <CheckBooks books={fbl}/> : null}
            </div>              
        </>
    )
}