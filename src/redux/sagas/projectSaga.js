import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* addProject(action) {
    try {
        yield axios.post(`/project/${action.payload.id}`, action.payload);
        yield alert('Project added.');
        yield put({ type: 'FETCH_PROJECT'});
    }catch (error) {
        console.log('Error in add project:', error);
    }
}
function* fetchProject(action) {
    try{
    const responseFromServer = yield axios.get('/projectget');
    yield put({ type: 'SET_PROJECT', payload: responseFromServer.data});
    console.log('response from server is:',responseFromServer.data)
  } catch (error) {
    console.log('Unabale to fetch project from server', error);
    alert('Unabale to fetch project from server', error);
  }
}

function* projectSaga() {
    yield takeLatest('ADD_PROJECT', addProject);
    yield takeLatest('FETCH_PROJECT', fetchProject)
}


export default projectSaga;