import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  productsActions,
  selectShowCreateProduct,
} from "../../store/productsSlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

function CreateProductModal() {
  const showModal = useSelector(selectShowCreateProduct);
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({});
  const productsCollectionRef = collection(db, "products");

  const handleCloseModal = () => {
    dispatch(productsActions.setShowModal());
  };

  const handleNewProduct = async () => {
    try {
      await addDoc(productsCollectionRef, { ...newProduct });
      await setNewProduct({});
      handleCloseModal();
    } catch (error) {}
  };

  return (
    <div>
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label for="nameInput" class="form-label">
              Name:
            </label>
            <input
              type="text"
              class="form-control"
              id="nameInput"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  title: e.target.value,
                })
              }
            />
            <label for="descriptionInput" class="form-label">
              Description:
            </label>
            <input
              type="text"
              class="form-control"
              id="descriptionInput"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  description: e.target.value,
                })
              }
            />
            <label for="priceInput" class="form-label">
              Price:
            </label>
            <input
              type="number"
              class="form-control"
              id="priceInput"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: Number(e.target.value),
                })
              }
            />
            <button
              class="btn btn-primary mt-4"
              type="button"
              onClick={() => handleNewProduct()}
            >
              Add product
            </button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default CreateProductModal;
