import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* addProject(action) {
    console.log('project post saga');
    try {
        yield axios.post(`/project/${action.payload.id}`, action.payload);
        yield alert('Project added.');
        yield put({ type: 'FETCH_PROJECT'});
    }catch (error) {
        console.log('Error in add project:', error);
    }
}
function* fetchProject(action) {
    console.log('get project server 1');
    console.log('action:')
    try{
    const responseFromServer = yield axios.get(`/project`);
    yield put({ type: 'SET_PROJECT', payload: responseFromServer.data});
    console.log('response from project server is:',responseFromServer.data)
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