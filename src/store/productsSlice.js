import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    showCreateModal: false,
    showEditModal: false,
    productToEdit: null,
  },
  reducers: {
    setProducts(state, action) {
      state.productsList = action.payload;
    },
    setShowModal(state) {
      state.showCreateModal = !state.showCreateModal;
    },
    setShowEditModal(state) {
      state.showEditModal = !state.showEditModal;
    },
    setProductToEdit(state, action) {
      state.productToEdit = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export const selectProductsList = (state) => state.products.productsList;
export const selectShowCreateProduct = (state) =>
  state.products.showCreateModal;
export const selectShowEditProduct = (state) => state.products.showEditModal;
export const selectProductToEditProduct = (state) =>
  state.products.productToEdit;

export default productsSlice;
