import React, { useState, useEffect, useRef } from "react";
import "tachyons";

import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";

import "./App.css";

const App = () => {
    const isMounted = useRef(false);
    const [Robots, setRobots] = useState([]);
    const [SearchField, setSearchField] = useState("");

    const onSearchChange = (event) => setSearchField(event.target.value);

    const filteredRobots = Robots.filter((Robot) =>
        Robot.name.toLowerCase().includes(SearchField.toLowerCase())
    );

    useEffect(() => {
        if (isMounted.current) return;
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => setRobots(users));
        isMounted.current = true;
    }, []);

    return !Robots.length ? (
        <h1 className='tc f1'>Loading...</h1>
    ) : (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList Robots={filteredRobots} />
            </Scroll>
        </div>
    );
};

export default App;
