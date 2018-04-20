import { PAGE_NEXT, PAGE_PREV } from '../actions/dates';

const initialState = {
  sDate: new Date(2017, 6, 10),
  count: 5
};

//TODO: исключить выходные дни
/*const incrementDate = (date, shift) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + shift);
  let day = newDate.getDay();
  if(day == 6 || day == 0) {
    newDate.setDate(newDate.getDate() + (1 + 7 - newDate.getDay()) % 7);
  }

  return newDate;
}*/

let utils = {
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
}

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