import React from 'react';

import { useParams } from 'react-router-dom';

function ProductDetail() {
    const params = useParams();
    return <li>Product Detail, ID={params.productId}</li>
}

export default ProductDetail;
