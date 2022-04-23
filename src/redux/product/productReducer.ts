import {Reducer} from 'redux';
import {
  FETCH_PRODUCTS_ACTION, FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
} from './productActions';

type ProductState = {
  p1: any[];
  p2: any[];
  p3: any[];
}
const defaultProductState: ProductState = {
  p1: [],
  p2: [],
  p3: [],
};

const productReducer: Reducer<ProductState, FETCH_PRODUCTS_ACTION> = (state = defaultProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        p1: action.payload.productList1,
        p2: action.payload.productList2,
        p3: action.payload.productList3,
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
