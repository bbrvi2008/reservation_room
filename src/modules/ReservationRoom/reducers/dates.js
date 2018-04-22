import { PAGE_NEXT, PAGE_PREV } from '../actions/dates';

let utils = {
  getMonday: () => {
    let now = new Date();
    now.setDate(now.getDate() - now.getDay() + 2);
    return new Date(now.getFullYear(), now.getMonth(), now.getDay());
  },
  dateCounterDecorator: (date, step) => {
    return () => {
      let nextDate = new Date(date);
      date.setDate(date.getDate() + step);
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

  const dateCounter = utils.dateCounterDecorator(new Date(dates.sDate), 1);
  return Array.apply(0, new Array(dates.count)).map(() => dateCounter());
}