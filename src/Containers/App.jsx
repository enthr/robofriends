import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import 'tachyons';

import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import { requestRobots, setSearchField } from '../actions';

import './App.css';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

const App = ({ searchField, onSearchChange, onRequestRobots, robots, isPending }) => {
    const isMounted = useRef(false);

    const filteredRobots = robots.filter((Robot) =>
        Robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    useEffect(() => {
        if (isMounted.current) return;
        onRequestRobots();
        isMounted.current = true;
    }, []);

    return isPending ? (
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
