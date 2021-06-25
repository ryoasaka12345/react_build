import React, { Fragment, useState, useEffect } from 'react';
import { Route, Link, useParams, useRouteMatch } from 'react-router';

function Reviews() {
    const params = useParams();
    const [reviews, setReviews] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    console.log("Reviews");

    const reviewsAPI = `https://60caadb921337e0017e42cf9.mockapi.io/products/${params.productId}/reviews`;
    const fetchProductReviewsHandler = () => {
        setIsLoading(true);
        fetch(reviewsAPI)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setReviews(data);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchProductReviewsHandler();
    }, []);

    const ProductReviews = () => {
        console.log("ProductReviews");
        return (
            <Fragment>
                <hr />
                <h3>Reviews</h3>
                {reviews.map((review) => (
                    <p key={review.id}
                        style={
                            {
                                borderBottom: "#ccc 1px solid",
                                paddingBottom: "10px"
                            }
                        }>
                        {review.content}
                    </p>
                ))}
            </Fragment>
        );
    }

    return (
        <Fragment>
            {isLoading && <p>Loading Reviews...</p>}
            {!isLoading && <ProductReviews/>}
        </Fragment>
    );
}

export default Reviews;
