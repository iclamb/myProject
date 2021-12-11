import React from 'react';
import '../style.css'
import img1 from '../images/firmbee-com-gcsNOsPEXfs-unsplash.jpg';
import { useNavigate } from 'react-location';
import { userForms } from './CreatedCard';


export default function CardCreator({ formData, setFormData }) {
    const navigate = useNavigate();
    
    
    const handleChange = (e) => {
        let key = e.target.value;
        let isChecked = e.target.checked;
        console.log(isChecked);
        setFormData((formData) => {
          return { ...formData, [key]: isChecked };
        });
      };
    const addUser = () => {
        
        let number = Math.random()*100;
        let Id = Math.floor(number).toString();
        setFormData((formData) => {return {...formData, id: Id}})        
        console.log("Id: " + Id)

    }
    const handleClick = (e) => {
    e.preventDefault();
    addUser(); 

    navigate({ to: `showcase/`, replace: true});
    } 

    return(
        <div className="dev-container">
            
            <img className="logo" src={img1} alt="Stock"/>
            <h1>Create Your Dev Card</h1>
            <div className="form-container">
                
            <form className="creator-form">
                <input  className="text-box"
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={(e) =>{
                            let val = e.target.value
                            setFormData((formData) => {return {...formData, fullName: val }})
                        }}                                       
                />                                                                                                                
                <input className="text-box" type="text" id="aboutMe"   name="aboutMe" placeholder="About Me" 
                        onChange={(e) =>{
                            let val = e.target.value
                            setFormData((formData) => {return {...formData, aboutMe: val }})
                        }}>
                </input>
                <p className="tech-know">Technologies You Know</p>
                <div className="checkbox-container">
                <label for="html">HTML</label>
                <input className="checkbox" type="checkbox" value="HTML" onChange={(e) => handleChange(e)}></input>
                <label for="css">CSS</label>
                <input className="checkbox" type="checkbox" value="CSS" onChange={(e) => handleChange(e)}></input>
                <label for="js">JS</label>
                <input className="checkbox"  type="checkbox" value="JS" onChange={(e) => handleChange(e)}></input>
                <label for="react">React</label>
                <input className="checkbox" type="checkbox" value="React" onChange={(e) => handleChange(e)}></input>
                <label for="git">git</label>
                <input className="checkbox" type="checkbox" value="git" onChange={(e) => handleChange(e)}></input>
                <label for="node">Node.js</label>
                <input className="checkbox" type="checkbox" value="NodeJS" onChange={(e) => handleChange(e)}></input>
                </div>
                <input className="text-box" type="text" name="githubURL"  placeholder="Github URL" onChange={(e) =>{
                            let val = e.target.value
                            setFormData((formData) => {return {...formData, githubURL: val }})
                        }}></input>
                <input className="text-box" type="text" name="twitterURL"  placeholder="Twitter URL" 
                        onChange={(e) =>{
                            let val = e.target.value
                            setFormData((formData) => {return {...formData, twitterURL: val }})
                        }}
                ></input>
                <input className="text-box" type="text" name="favoriteBooks" placeholder="Favorite Books(separate by comma)" 
                onChange={(e) =>{
                            let val = e.target.value
                            setFormData((formData) => {return {...formData, favoriteBooks: val.split(',') }})
                        }}>
                </input>

                <button className="submit" type="submit" onClick={handleClick} >Create Site</button>
            </form>
            </div>
        </div>
        )
    }