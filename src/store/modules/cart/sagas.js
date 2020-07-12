import { call, put, all, select, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import formatValue from '../../../utils/formatValue';

import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((product) => product.id === id)
  );

  // const currentAmount = productExists ? productExists.amount : 0;
  // const amount = currentAmount + 1;

  if (productExists) {
    // disparar action para atualizar quantidade no carrinho
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatValue(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
