import React from 'react';
import classes from "./UserInput.module.scss";
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
const UserInput = () => {
    return (
        <div className={classes.wrap}>
            User input
            <Link to="/home">
            Home chalo
            </Link>
        </div>
    )
}
export default UserInput;