const customerReducer = (state = [], action) => {
  console.log('reducer');
    switch (action.type) {
      case 'SET_CUSTOMER':
        return action.payload;
    
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default customerReducer;