import { useState } from "react";

const User = (props)=>{

const [count, setCount] = useState(0);
const [count2, setCount2] = useState(2);

const {name, location} = props

    return (
        <div className="user-card">

            <h3>{count}</h3>
            <h3>{count2}</h3>
            <h1>{name}</h1>
            <span>Software Developer</span>
            <h3>X: @utkarshp19</h3>
            <h4>Location: {location}</h4>
        </div>
    )
}

export default User;