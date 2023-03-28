import React from 'react'

function Item(props) {
    return (
        <div class="col-sm-4  mb-5">
            <div class="card" style={{ width: "15rem" }}>
                <img src={props.image} class="card-img-top" alt="image" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <p class="card-text">${props.price}</p>
                    <div class="d-flex flex-column">
                        <button type="button" class="btn btn-primary mb-2">Add to cart</button>
                        <button type="button" class="btn btn-link">See more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item