import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const productsListAPI = 'https://60caadb921337e0017e42cf9.mockapi.io/products';
    const fetchProductsHandler = () => {
        setIsLoading(true);
        fetch(productsListAPI)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProducts(data);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchProductsHandler();
    }, []);

    return (
        <div>
            <h2>Products List</h2>
            {isLoading && <p>Loading products list...</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product-detail/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products;
