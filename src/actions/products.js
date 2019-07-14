import {
  GET_PRODUCTS_INIT,
  INIT_CURRENT_PRODUCT
} from '../action-types/products';

export const getProductsList = () => ({
  type: GET_PRODUCTS_INIT,
});

export const initCurrentProduct = (currentProduct) => ({
  type: INIT_CURRENT_PRODUCT, payload: currentProduct
})
