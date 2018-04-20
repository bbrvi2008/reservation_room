export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('store_reservation');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('store_reservation', serializedState);
  } catch (error) {
    
  }
}