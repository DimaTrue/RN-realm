import * as products from '../action-types/products';

const initialState = {
  isLoading: false,
  productList: [],
  errorProductList: '',
  currentProduct: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case products.GET_PRODUCTS_INIT:
      return { ...state, isLoading: true };

    case products.GET_PRODUCTS_SUCCESS:
      return { ...state, productList: action.payload, isLoading: false };

    case products.GET_PRODUCTS_FAILURE:
      return { ...state, errorProductList: action.payload, isLoading: false };

    case products.INIT_CURRENT_PRODUCT:
      return { ...state, currentProduct: state.productList[action.payload] };

    default:
      return state;
  }
}
