import React, { useEffect, useState, Fragment } from 'react';

import { useParams, Route } from 'react-router-dom';

function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const productDetailAPI = `https://60caadb921337e0017e42cf9.mockapi.io/products/${params.productId}/`;
    const fetchProductDetailHandler = () => {
        setIsLoading(true);
        fetch(productDetailAPI)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProduct(data);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchProductDetailHandler();
    }, []);

    const ProductDetail = () => {
        return (
            <Fragment>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </Fragment>
        );
    }

    return (
        <Fragment>
            {isLoading && <p>Loading Product Data...</p>}
            {!isLoading && <ProductDetail />}
        </Fragment>
    );
}

export default ProductDetail;
