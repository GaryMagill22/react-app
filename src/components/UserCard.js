import React from 'react';

const UserCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    return (
        <div>
            <>
                <h1 style={{ color: "purple" }} >{firstName}, {lastName}</h1>
                <h3><span style={{ color: "blue" }} >age</span>:{age} </h3>
                <h3>Hair Color:<span style={{ color: "brown" }} >{hairColor}</span></h3>

            </>

        </div>
    );
}
export default UserCard;