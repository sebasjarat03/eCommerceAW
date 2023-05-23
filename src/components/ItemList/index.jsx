import React, { useEffect } from "react";
import Item from "../Item";
import { useDispatch, useSelector } from "react-redux";
import { productsActions, selectProductsList } from "../../store/productsSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { selectLogin } from "../../store/loginSlice";

function ItemList() {
  const products = useSelector(selectProductsList);
  const dispatch = useDispatch();
  const productsCollectionRef = collection(db, "products");
  const isLoggedIn = useSelector(selectLogin);

  const getProducts = async () => {
    try {
      const data = await getDocs(productsCollectionRef);
      const formattedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(productsActions.setProducts(formattedData));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddModal = () => {
    dispatch(productsActions.setShowModal());
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <div>
      {isLoggedIn && (
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => handleAddModal()}
        >
          New Product
        </button>
      )}

      <div class="container mt-4">
        <div class="row">
          {products.map((item) => (
            <Item key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
