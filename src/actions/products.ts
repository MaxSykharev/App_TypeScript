export const GET_PRODUCTS_REQUEST = '@/GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_RESPONSE = '@/GET_PRODUCTS_RESPONSE'
export const GET_PRODUCTS_FAIL = '@/GET_PRODUCTS_FAIL'
export const getProductsRequestAction = () => ({ type: GET_PRODUCTS_REQUEST})
export const GetProductsResponseAction = (payload: any) => ({ type: GET_PRODUCTS_RESPONSE})
export const GetProductsFailAction = () => ({ type: GET_PRODUCTS_FAIL})