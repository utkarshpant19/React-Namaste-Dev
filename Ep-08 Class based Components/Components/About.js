import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About = ()=>{

//     return (
//         <div >
//             <h1>This is Swiggy Clone App</h1>
//             {/* <User name={'Utkarsh Pant (Functional)'} location={'Rewa'} /> */}
//             <UserClass name={'Utkarsh Pant (Class)'} location={'Rewa Class'}/>
//         </div>
//     )
// }

class About extends React.Component{

    constructor(props){

            super(props);
        // console.log('Parent Constructor Called');
    }

    componentDidMount(){
        // console.log('Parent Component Did Mount');
    }

    render(){

        return (
            <div >
                <h1>This is Swiggy Clone App</h1>
                {/* <User name={'Utkarsh Pant (Functional)'} location={'Rewa'} /> */}
                <UserClass name={'Utkarsh Pant (Class)'} location={'Rewa Class'}/>
            </div>
        ) 
    }
}

export default About;