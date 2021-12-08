import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import React from "react"

export default function ProfilePicture({ src, name, city, jobTitle, icon0, icon1, icon2 }){


    return(
        <div className="profile-header">
 
            <img className="profile-picture" src={src} alt="something here"></img>
                <div className="user-information">
                    <ul className="small-text-list">
                    <li><span className="fa-icon"><FontAwesomeIcon icon={icon0} size="sm" /></span>{name}</li>
                    <li><span className="fa-icon"><FontAwesomeIcon icon={icon1} size="sm" /></span>{jobTitle}</li>
                    <li><span className="fa-icon"><FontAwesomeIcon icon={icon2} size="sm" /></span>{city}</li>
                    </ul>
                </div>
        </div>
    )

}