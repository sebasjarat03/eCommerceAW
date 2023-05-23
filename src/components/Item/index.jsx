import React from "react";
import { cartActions } from "../../store/cartSlice";
import { selectLogin } from "../../store/loginSlice";
import { useSelector, useDispatch } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import {
  productsActions,
  selectShowEditProduct,
} from "../../store/productsSlice";
import EditProductModal from "../EditProductModal";

function Item({ product }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLogin);
  const isEditOpen = useSelector(selectShowEditProduct);

  const handleAdd = () => {
    if (isLoggedIn) {
      dispatch(
        cartActions.addToCart({
          id: product.id,
          price: product.price,
          name: product.title,
        })
      );
    } else {
      alert("Please log in to add items to your cart.");
    }
  };

  const handleDelete = async () => {
    try {
      if (isLoggedIn) {
        const productDoc = doc(db, "products", product.id);
        await deleteDoc(productDoc);
      } else {
        alert("Please log in to delete this item.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    if (isLoggedIn) {
      dispatch(productsActions.setShowEditModal());
      dispatch(
        productsActions.setProductToEdit({
          id: product.id,
          price: product.price,
          title: product.title,
          description: product.description,
        })
      );
    } else {
      alert("Please log in to edit this item.");
    }
  };

  return (
    <div class="col-sm-4  mb-5">
      <div class="card" style={{ width: "15rem" }}>
        {product.image ? (
          <img src={product.image} class="card-img-top" alt="image" />
        ) : null}
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">{product.description}</p>
          <p class="card-text">${product.price}</p>
          <div class="d-flex flex-column">
            <button
              onClick={() => handleAdd()}
              type="button"
              class="btn btn-primary mb-2"
            >
              Add to cart
            </button>
            <button
              type="button"
              class="btn btn-danger mb-2"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
            <button
              type="button"
              class="btn btn-link"
              onClick={() => handleEdit(product)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
