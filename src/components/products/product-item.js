import React from "react";
import { Link } from "react-router-dom";


export default function (props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{props.url}</h4>
            <Link to={`/product/${props.slug}`}>Link</Link>
        </div>
    )
}