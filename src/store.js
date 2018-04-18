import { createStore } from 'redux';
import rootReducer from './reducers';

export function confugureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState
  );
  
  return store;
}