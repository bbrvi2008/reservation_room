export  const PAGE_NEXT = 'PAGE_NEXT';
export  const PAGE_PREV = 'PAGE_PREV';

export default {
  pageNext: () => ({
    type: PAGE_NEXT
  }),
  pagePrev: () => ({
    type: PAGE_PREV
  })
};