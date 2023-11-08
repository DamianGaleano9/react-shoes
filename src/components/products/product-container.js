import React, { Component } from "react";
import ProductItem from "./product-item";
import axios from "axios";



export default class ProductContainer extends Component {
    constructor() {
        console.log('Products is render');
        super();

        this.state = {
            pageName: "",
            isLoading: false,
            data: []
        }
    }


    getProductsItems() {
        axios.get('http://localhost:4000/api/products')
            .then(response => {
                this.setState({
                    data: response.data[0]
                })
            })
            .catch(error => {
                console.log(error);

            });

    };

    productsItems() {

        return this.state.data.map(item => {
            console.log('producItem', item);

            return (
                <ProductItem
                    key={item.products_id}
                    item={item}
                />
            );
        })
    }


    componentDidMount() {
        this.getProductsItems();
    }

    render() {

        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div className="container-wrapper">
                <h2>{this.state.pageName}</h2>
                <div className="product-items-wrapper">
                    {this.productsItems()}
                </div>

            </div>
        )
    }
}

// import React, { useContext } from "react";
// import { dataContext } from "../Context/data-context";
// import ProductItem from "./product-item";

// const ProductContainer = () => {
//   const { data, isLoading } = useContext(dataContext);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container-wrapper">
//       <h2>{data.pageName}</h2>
//       <div className="product-items-wrapper">
//         {data.data.map((item) => (
//           <ProductItem key={item.products_id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductContainer;






