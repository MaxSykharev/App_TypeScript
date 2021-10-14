import { call,put  } from '@redux-saga/core/effects'
import { GetProductsFailAction, GetProductsResponseAction } from '../actions/products';
import { PRODUCTS_ENDPOINT } from "../constants/endpoints";
import { getRequest } from "../utils";

export function* productsSaga(action: any) {
    try {
        //@ts-ignore
        const response = yield call(getProducts);
        yield put(GetProductsResponseAction(response.data))
    } catch (error) {
        yield put(GetProductsFailAction())
    }
};

async function getProducts() {
    const response = await getRequest(`${PRODUCTS_ENDPOINT}`);
    return response;
}