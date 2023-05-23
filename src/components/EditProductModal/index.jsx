import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  productsActions,
  selectProductToEditProduct,
  selectShowEditProduct,
} from "../../store/productsSlice";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

function EditProductModal() {
  const showModal = useSelector(selectShowEditProduct);
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({});
  const productsCollectionRef = collection(db, "products");
  const productToEdit = useSelector(selectProductToEditProduct);

  const handleCloseModal = () => {
    dispatch(productsActions.setShowEditModal());
  };

  const handleEditProduct = async () => {
    try {
      const productDoc = doc(db, "products", productInfo.id);
      console.log(productInfo);
      await updateDoc(productDoc, { ...productInfo });
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setProductInfo(productToEdit);
  }, [productToEdit]);

  return (
    <div>
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit a product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label for="nameInput" class="form-label">
              Name:
            </label>
            <input
              type="text"
              class="form-control"
              value={productInfo.title}
              id="nameInput"
              onChange={(e) =>
                setProductInfo({
                  ...productInfo,
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
              value={productInfo.description}
              onChange={(e) =>
                setProductInfo({
                  ...productInfo,
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
              value={productInfo.price}
              id="priceInput"
              onChange={(e) =>
                setProductInfo({
                  ...productInfo,
                  price: Number(e.target.value),
                })
              }
            />
            <button
              class="btn btn-primary mt-4"
              type="button"
              onClick={() => handleEditProduct()}
            >
              Save changes
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

export default EditProductModal;
