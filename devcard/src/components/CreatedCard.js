import React from 'react';

//FontAwesome

import { faTerminal, faInfoCircle, faHandPointRight, faBook, faToolbox, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


//config
import { defaultUser } from '../config'
import NoImg from '../images/no_image.jpg'
import Header from "./Header";
import ProfilePicture from "./ProfilePicture";

const userForms = [defaultUser]


export { userForms };



export default function CreatedCard({ formData, number, setFormData }){
    const userLength = userForms.length
    const index = userLength - 1;

    


const pushObject = () =>{
    
        userForms.push({...formData})
}

pushObject();

    const allName = formData.fullName;
    const nameSplit = allName.split(' ')
    const firstName = nameSplit[0]
 
// const checkTech = () => {

     const ktech = formData.knownTechnologies;
     console.log(ktech);
//     if (ktech.includes('HTML')){
//         console.log('true')
//         return 'known-tech'
//     }
//     console.log(ktech)
// }

// checkTech();

 
const checkBooks = () =>{
    if(formData.favoriteBooks === null){
        return false
    }
}
console.log(userForms);
console.log(formData.favoriteBooks[1])

/**Book Image search */
// const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${textString}`;
// const [text, setText] = useState("")
// const [imgURL, setImgURL] = useState('');
// const textString = encodeURI(text)
// console.log(text)
// console.log("encodeText: " + encodeURI(text));

// const crawlBooks = (e) => {
//     e.preventDefault();
//     fetch(API_URL)
//       .then(data=> data.json())
//       .then(jsonData => setImgURL(jsonData.items[0].volumeInfo.imageLinks.thumbnail))
//       .catch(err => console.log(err))
      

// }
  

// Profile Picture props: src, name, city, jobTitle, icon0, icon1, icon2
// Header Props: title, icon, text
return (
    <div className="card-container">
        {/* <pre>{JSON.stringify(formData)}</pre> */}
        <div className="left-container">
            <ProfilePicture src={NoImg} icon0={faInfoCircle} icon1={faToolbox} icon2={faMapMarkerAlt} name={formData.fullName} city="Vancouver, Canada" jobTitle="Full Stack Developer" />
                <Header className="profile-header" title={`Connect with ${firstName} `} />    
        </div>
        <div className="right-container">
    <Header className="header" title={`Welcome to ${firstName}'s Corner of the Internet`} icon={faInfoCircle}/>
    <Header className="header" title="About Me" icon={faHandPointRight} text={formData.aboutMe}/>
    <Header className="header" title="Technologies" icon={faTerminal} knownTech={true}  />
    <Header className="header" title="Favorite Books" icon={faBook} favBook={checkBooks}  />
        </div>
    </div>
     
    
             
)

}