import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//post saga = send info to server
function* addCustomer(action) {
    try { 
      yield axios.post('/intake', action.payload);
      yield alert('Customer added.')
      yield put({ type: 'FETCH_CUSTOMER' });
    } catch (error) {
      console.log('Error with add customer:', error);
    }
  }

  //fetch saga = works with customerReducer
  function* fetchCustomer(action) {
    try{
    const responseFromServer = yield axios.get('/intake');
    yield put({ type: 'SET_CUSTOMER', payload: responseFromServer.data});
    console.log('response from server is:',responseFromServer.data)
  } catch (error) {
    console.log('Unabale to fetch customers from server', error);
    alert('Unabale to fetch customers from server', error);
  }
}
function* fetchFocusCustomer(action) {
  try{
  const responseFromServer = yield axios.get(`/intake/${action.payload}`);
  yield put({type: 'SET_FOCUS', payload: responseFromServer.data});
  console.log('response from server is:',responseFromServer.data)
} catch (error) {
  console.log('Unabale to fetch customers from server', error);
  alert('Unabale to fetch customers from server', error);
}
}
  

  function* loginSaga() {
    yield takeLatest('ADD_CUSTOMER', addCustomer);
    yield takeLatest('FETCH_CUSTOMER', fetchCustomer);
    yield takeLatest('FETCH_FOCUS_CUSTOMER', fetchFocusCustomer);
   
  }
  
  export default loginSaga;
  