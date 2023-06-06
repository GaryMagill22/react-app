import React, { useState } from 'react';


const UserCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [count, setCount] = useState(age);
    const handleClick = () => {

        setCount(count + 1);
    };
    return (
        <div style={{
            border: '1px solid black', padding: '10px', margin: '10px auto', width: '300px', alignItems: 'center'
        }} >
            <>
                <h1 style={{ color: "purple" }} >{firstName}, {lastName}</h1>
                <h3><span style={{ color: "blue" }} >age</span>:{count} </h3>
                <h3>Hair Color:<span style={{ color: "brown" }} >{hairColor}</span></h3>
                <button onClick={handleClick}>Birthday Button for {firstName} {lastName}</button>

            </>

        </div >
    );
}
export default UserCard;