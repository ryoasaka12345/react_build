import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div>
            <h2>Welcome to products page</h2>
            <ul>
                <li>
                    <Link to="/product-detail/1">Product 1</Link>
                </li>
                <li>
                    <Link to="/product-detail/2">Product 2</Link>
                </li>
                <li>
                    <Link to="/product-detail/3">Product 3</Link>
                </li>
            </ul>
        </div>
    );
}

export default Products;
