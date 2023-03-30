import React from 'react'
import { cartActions } from '../../store/cartSlice';
import { selectLogin } from '../../store/loginSlice';
import { useSelector, useDispatch } from 'react-redux';

function Item(props) {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectLogin);


    const handleAdd = () => {
        if (isLoggedIn) {
            dispatch(cartActions.addToCart({
                id: props.id,
                price: props.price,
                name: props.title

            }));
        } else {
            alert("Please log in to add items to your cart.");
        }

    }

    return (
        <div class="col-sm-4  mb-5">
            <div class="card" style={{ width: "15rem" }}>
                <img src={props.image} class="card-img-top" alt="image" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <p class="card-text">${props.price}</p>
                    <div class="d-flex flex-column">
                        <button onClick={() => handleAdd()} type="button" class="btn btn-primary mb-2">Add to cart</button>
                        <button type="button" class="btn btn-link">See more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item