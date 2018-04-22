import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

export function confugureStore(initialState = {}) {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState
  );

  store.subscribe(() => {
    saveState(store.getState());
  });
  
  return store;
}