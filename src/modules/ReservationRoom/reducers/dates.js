import { PAGE_NEXT, PAGE_PREV } from '../actions/dates';

let utils = {
  getMonday: () => {
    let now = new Date();
    now.setDate(now.getDate() - now.getDay() + 1);
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  },
  makeDateCounter: (date, step) => {
    let counter = new Date(date);

    return () => {
      let nextDate = new Date(counter);
      counter.setDate(counter.getDate() + step);
      return nextDate;
    }
  },
  pageNext: (date) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 7);   

    return newDate;
  },
  pagePrev: (date) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 7);

    return newDate;
  }
};

const initialState = {
  sDate: utils.getMonday(),
  count: 5
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_NEXT:
      return {
        ...state,
        sDate: utils.pageNext(state.sDate)
      }
    case PAGE_PREV:
      return {
        ...state,
        sDate: utils.pagePrev(state.sDate)
      }
    default:
      return state;
  }
}

export const getDates = (state) => {
  const { dates } = state;

  const dateCounter = utils.makeDateCounter(dates.sDate, 1);
  return Array.apply(0, new Array(dates.count)).map(() => dateCounter());
}