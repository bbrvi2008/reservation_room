import { PAGE_NEXT, PAGE_PREV } from '../actions/dates';

const initialState = {
  sDate: new Date(2017, 6, 9),
  count: 5
};

//TODO: исключить выходные дни
const incrementDate = (date, shift) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate());

  return newDate;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_NEXT:
      return {
        ...state,
        sDate: incrementDate(state.sDate, state.count)
      }
    case PAGE_PREV:
      return {
        ...state,
        sDate: incrementDate(state.sDate, -1 * state.count)
      }
    default:
      return state;
  }
}

let utils = {
  dateCounterDecorator: (date, step) => {
    return () => {
      date.setDate(date.getDate() + step);
      return new Date(date);
    }
  }
}

export const getDates = (state) => {
  const { dates } = state;

  const dateCounter = utils.dateCounterDecorator(dates.sDate, 1);
  return Array(dates.count).fill().map(() => (dateCounter()));
}