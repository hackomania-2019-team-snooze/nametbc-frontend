import { createStore } from "redux";

const rootReducer = (state = {}, action) => {
  return state;
};

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export { configureStore };
