import { combineReducers } from 'redux';

const projectReducer = (state = [], action) => {
    console.log('project reducer');
      switch (action.type) {
        case 'SET_PROJECT':
        console.log('action.paylod:', action.payload)
          return action.payload;
      
        default:
        console.log('state:', state)
          return state;
      }
    };

export default combineReducers({
    projectReducer,

})