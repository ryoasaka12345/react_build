import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewProduct() {
    console.log("New Product");
    const [isLoading, setIsLoading] = useState(false);

    // to keeps a value
    const productName = useRef(null);
    const productPrice = useRef(null);
    const productDesc = useRef(null);

    const submitFormHandler = (e) => {
        e.preventDefault();

        const product = {
            name: productName.current.value,
            price: productPrice.current.value,
            description: productDesc.current.value,
        };

        console.log(product);
    };

    return (
        <div>
            <h2>New product</h2>
            {isLoading && <p>Adding new product...</p>}
            <form onSubmit={submitFormHandler}>
                <p>
                    <label>Name </label>
                    <input type="text" ref={productName}/>
                </p>
                <p>
                    <label>Price </label>
                    <input type="number" ref={productPrice}/>
                </p>
                <p>
                    <label>Description </label>
                    <textarea type="text" ref={productDesc} cols="50" rows="4"></textarea>
                </p>
            </form>
            <p><button>Add Product</button></p>
        </div>
    );
}

export default NewProduct;
