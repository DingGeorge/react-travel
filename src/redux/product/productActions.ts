import {productList1, productList2, productList3} from '../../mock/products';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../store';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START'; // 调用推荐产品api-开始
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'; // 调用推荐产品api-成功
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL'; // 调用推荐产品api-失败

type FETCH_PRODUCTS_START_ACTION = {
  type: typeof FETCH_PRODUCTS_START
}
type FETCH_PRODUCTS_SUCCESS_ACTION = {
  type: typeof FETCH_PRODUCTS_SUCCESS,
  payload: any
}
type FETCH_PRODUCTS_FAIL_ACTION = {
  type: typeof FETCH_PRODUCTS_FAIL,
  payload: any
}

export type FETCH_PRODUCTS_ACTION =
  FETCH_PRODUCTS_START_ACTION |
  FETCH_PRODUCTS_SUCCESS_ACTION |
  FETCH_PRODUCTS_FAIL_ACTION;


export const fetchProductsStartActionCreator = (): FETCH_PRODUCTS_START_ACTION => ({
  type: FETCH_PRODUCTS_START
});
export const fetchProductsSuccessActionCreator = (payload: any): FETCH_PRODUCTS_SUCCESS_ACTION => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload
});
export const fetchProductsFailActionCreator = (payload: any): FETCH_PRODUCTS_FAIL_ACTION => ({
  type: FETCH_PRODUCTS_FAIL,
  payload
});


/**
 * thunk 可以返回一个 thunkAction函数，而不一定是对象action
 * 在一个 thunkAction函数中，可以完成一系列action的dispatch或者异步API的调用
 */
export const fetchProductsActionCreator = (): ThunkAction<void, RootState, unknown, FETCH_PRODUCTS_ACTION> => {
  return async (dispatch, getState) => {
    dispatch(fetchProductsStartActionCreator());
    try {
      // 异步请求
      const promise = Promise.resolve({
        code: 0,
        data: {productList1, productList2, productList3}
      })
      const res = await promise;
      console.log(res);
      dispatch(fetchProductsSuccessActionCreator(res.data));
    } catch (e) {
      dispatch(fetchProductsFailActionCreator(e));
    }
  };
}

