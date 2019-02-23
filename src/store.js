const rootReducer = (state = {}, action) => {
  if(action.type === "ADD_USER"){
    return{
      ...state,
      user: action.data
    }
  }
  return state;
};

export default rootReducer;
