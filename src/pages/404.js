import React from "react";

import "../scss/global.scss";


const NotFound = () => {
    return (
        <div className="section">
            <div className="not-found txtc">
                <h1 className="block">404</h1>
                <p>SORRY, PAGE NOT FOUND!</p>
                <a href="/"><button className="button">Home Page</button></a>
            </div>
        </div>
    );
}

export default NotFound;