import React from "react";
import {Link} from "react-router-dom";

export default function() {
    return(
        <div>
            <h2>We Couldn't find the page</h2>
            <Link to="/">Return To HomePage</Link>
        </div>
    )
}