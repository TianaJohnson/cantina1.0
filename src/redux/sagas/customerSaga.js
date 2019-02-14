import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* addCustomer(action) {
    try {
    //   const config = {
    //     headers: { 'Content-Type': 'application/json' },
    //     withCredentials: true,
    //   };
  
      // the config includes credentials which
      // allow the server session to recognize the user
      // when the server recognizes the user session
      // it will end the session
      yield axios.post('/intake', action.payload);
      yield alert('Customer added.')
      //yield put({ type: '' });-- for get
  
    } catch (error) {
      console.log('Error with add customer:', error);
    }
  }
  
  function* loginSaga() {
    yield takeLatest('ADD_CUSTOMER', addCustomer);
    
  }
  
  export default loginSaga;
  