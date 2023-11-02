import React from "react";
import { Link } from "react-router-dom";


export default function (props) {

    const { products_id, products_name, products_price, products_url } = props.item

    return (
        <div>
            <div className="product-item-wrapper">

                <Link to={`/product/${products_id}`}>
                    <img src={products_url} alt={products_name} />
                </Link>

                <div>{products_name}</div>
                <div className="info-cart">
                    {products_price + "€"}
                    <button type="submit" className="btn">To Cart</button>
                </div>

            </div>

        </div>
    );
}