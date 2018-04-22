export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('store_reservation');

    

    if(serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);

    console.log(state);
    state.dates["sDate"] = new Date(state.dates["sDate"]);
    state.reservations = state.reservations.map(reservation => {
      return {
        ...reservation,
        date: new Date(reservation["date"])
      };
    })

    return state;
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