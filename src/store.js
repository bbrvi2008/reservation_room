//TODO: Решить проблему с загрузкой даты
/*import { createStore } from 'redux';
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
}*/

import { createStore } from 'redux';
import rootReducer from './reducers';

export function confugureStore(initialState = {}) {
  const store = createStore(
    rootReducer
  );
  
  return store;
}