import React from 'react';

//FontAwesome

import { faTerminal, faInfoCircle, faHandPointRight, faBook, faToolbox, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


//config

import NoImg from '../images/no_image.jpg'
import Header from "./Header";
import ProfilePicture from "./ProfilePicture";
import KnownTech from './KnownTech';



export default function CreatedCard({ formData }){        
    let name = formData.fullName.split(" ");
    let firstName = name[0];
 

      
console.log({formData})

// Profile Picture props: src, name, city, jobTitle, icon0, icon1, icon2
// Header Props: title, icon, text
return (
    <div className="card-container" id={formData.id}>
        {/* <pre>{JSON.stringify(formData)}</pre> */}
        <div className="left-container">
            
                <ProfilePicture src={NoImg} icon0={faInfoCircle} icon1={faToolbox} icon2={faMapMarkerAlt} name={formData.fullName} city="Vancouver, Canada" jobTitle="Full Stack Developer" />
                <Header className="profile-header"
                        title={`Connect with ${firstName} `}
                        gitLink={formData.githubURL}
                        webLink={formData.webLinkURL}
                />    
        </div>
        <div className="right-container">
        <div className='container'>
                <Header className="header"
                        title={`Welcome to ${firstName}'s Corner of the Internet`}
                        icon={faInfoCircle}/>
                <Header className="header"
                        title="About Me"
                        icon={faHandPointRight}
                        text={formData.aboutMe}
                />
                
                <Header    
                        className="header"
                        title="Technologies"
                        icon={faTerminal}
                        checkTech={true}
                        css={formData.css}
                        html={formData.html}
                        js={formData.js}
                        react={formData.react}
                        git={formData.git}
                        jsnode={formData.jsnode}
                />
                <Header className="header"
                        title="Favorite Books"
                        icon={faBook} favBook={true}
                        fbl={formData.favoriteBooks}
                />
        </div>
        </div>
    </div>
     
    
             
)

}