import seed from './seed'

const rootReducer = (state = seed, action) => {
  if(action.type === "ADD_USER"){
    return{
      ...state,
      user: action.data
    }
  }
  return state;
};

export default rootReducer;
