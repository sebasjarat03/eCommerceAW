import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";

export const Cart = ({ items, showCart, handleCloseCart }) => (
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
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button type="button" class="btn btn-outline-success me-2">
                    -
                  </button>
                  {item.quantity}
                  <button type="button" class="btn btn-outline-success ms-2">
                    +
                  </button>
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
);

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
