const customerReducer = (state = [], action) => {
  console.log('reducer');
    switch (action.type) {
      case 'SET_CUSTOMER':
      console.log('action.paylod:', action.payload)
        return action.payload;
    
      default:
      console.log('state:', state)
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default customerReducer;