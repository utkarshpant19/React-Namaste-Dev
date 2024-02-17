// Structuring our App

/*
Header
    - Logo
    - Nav Links
Body
    - Search Box
    - Restaurant Container
        - Restaurant Cards
    
Footer
    - Copyright
    - Links
    - Address


*/
import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


const AppLayout = ()=> {

    return (

        <div className="app">
            <Header/>
            <Body/>
        </div>

        // Header
        // Body
        // Footer
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);