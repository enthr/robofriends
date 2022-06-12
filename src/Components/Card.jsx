import React from "react";

const Card = ({ name, username, email, id }) => {
    const randomString = username + id;
    return (
        <div className='tc bg-light-green dib br4 pa3 ma2 grow bw3 shadow-5'>
            <img
                src={`https://robohash.org/${randomString}`}
                alt='profile-img'
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
