import React from "react";
import { Link } from "gatsby";


import "../scss/global.scss";


const NotFound = () => {
    return (
        <div className="section">
            <div className="not-found txtc">
                <h1 className="block">404</h1>
                <p>SORRY, PAGE NOT FOUND!</p>
                <Link to="/"><button className="button">Home Page</button></Link>
            </div>
        </div>
    );
}

export default NotFound;