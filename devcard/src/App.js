//Components
import CardCreator from './components/CardCreator';
import CreatedCard from './components/CreatedCard';

import './App.css';
//hooks
import React, { useState } from 'react';
//config

//React Location
import { Router, Outlet, ReactLocation } from "react-location";
//1. Create an instance of the ReactionLocation Library
const location = new ReactLocation();

//2. Specify the URLs (routes)/pages for your application

//3. Wrap entire application in React Location Library


export default function App({index, number}){
  

  const [formData, setFormData] = useState({
    
    id: "" ,
    fullName: "",
    aboutMe: "",
    githubURL: "",
    twitterURL: "",
    favoriteBooks: "",
    HTML: false,
    CSS: false,
    JS: false,
    React: false,
    git: false,
    NodeJS: false
  
  });

    
    const routes = [
      {
        path: "/",
        element: <CardCreator formData={formData} setFormData={setFormData}/>
      
      },
      {
        path: "showcase",
        element: <CreatedCard formData={formData} number={1} />
      }
      ]

      
  return(
    <Router routes={routes} location={location}>
      <div>
        <Outlet />
      </div>
    </Router>
  )
}