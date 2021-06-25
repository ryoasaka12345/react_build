import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewProduct() {
    console.log("New Product");
    const [isLoading, setIsLoading] = useState(false);

    // to keeps a value
    const productName = useRef(null);
    const productPrice = useRef(null);
    const productDesc = useRef(null);

    const history = useHistory(null);
    const newProductAPI = 'https://60caadb921337e0017e42cf9.mockapi.io/products';

    const submitFormHandler = (e) => {
        console.log("submitHandler");
        e.preventDefault();

        setIsLoading(true);
        const product = {
            name: productName.current.value,
            price: productPrice.current.value,
            description: productDesc.current.value,
        };

        fetch(newProductAPI, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json;
            })
            .then((data) => {
                setIsLoading(false);
                // Back to products list page
                history.push('/products')
            });
    };

    return (
        <div>
            <h2>New product</h2>
            {isLoading && <p>Adding new product...</p>}
            <form onSubmit={submitFormHandler}>
                <p>
                    <label>Name </label>
                    <input type="text" ref={productName} />
                </p>
                <p>
                    <label>Price </label>
                    <input type="number" ref={productPrice} />
                </p>
                <p>
                    <label>Description </label>
                    <textarea type="text" ref={productDesc} cols="50" rows="4"></textarea>
                </p>
                <p><button>Add Product</button></p>
            </form>
        </div>
    );
}

export default NewProduct;
