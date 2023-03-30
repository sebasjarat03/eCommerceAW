import { Button, Modal } from 'react-bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, selectItemList, selectShowCart } from '../../store/cartSlice';

function Cart() {
    const showCart = useSelector(selectShowCart);
    const items = useSelector(selectItemList);
    const dispatch = useDispatch();

    const handleCloseCart = () => {
        dispatch(cartActions.setShowCart());
    }
    
    return (
        <div>
            <Modal show={showCart} onHide={handleCloseCart}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => dispatch(cartActions.removeFromCart({
                                            id: item.id,
                                            name: item.name,
                                            price: item.price
                                        }))} type="button" class="btn btn-outline-success me-2">-</button>
                                        {item.quantity}
                                        <button onClick={() => dispatch(cartActions.addToCart({
                                            id: item.id,
                                            name: item.name,
                                            price: item.price
                                        }))} type="button" class="btn btn-outline-success ms-2">+</button>
                                    </td>
                                    <td>{item.totalPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCart}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Cart