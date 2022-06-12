import React from "react";
import Card from "./Card";

const CardList = ({ Robots }) => {
    return (
        <>
            {Robots.map((robot) => (
                <Card
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    username={robot.username}
                    email={robot.email}
                />
            ))}
        </>
    );
};

export default CardList;
