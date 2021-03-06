import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import classNames from 'classnames';
import Navbar from "./Navbar";
import {Switch, Route} from 'react-router-dom';
import Home from "./Home";
import Portfolio from "./Portfolio";


export default function BaseLayout() {
    let [darkMode, setDarkMode] = useState(true);

    function handleClick() {
        darkMode ? setDarkMode(false) : setDarkMode(true);
    }

    
    return (
      <div
        className={classNames(
          Style.container,
          darkMode ? Style.dark : Style.light
        )}
      >
        <Navbar darkMode={darkMode} handleClick={handleClick} />
        <Main />
      </div>
    );
}

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/portfolio' component={Portfolio}></Route>
    </Switch>
);