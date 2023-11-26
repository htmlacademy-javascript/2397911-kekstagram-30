import { renderGallery } from './gallery';
import { debounce } from './util';

const filtersElement = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultBtn = filterForm.querySelector('#filter-default');
const randomBtn = filterForm.querySelector('#filter-random');
const discussedBtn = filterForm.querySelector('#filter-discussed');


const MAX_RANDOM_FILTER = 10;
const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};

const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min));

const filterHandlers = {
  [FilterEnum.DEFAULT]: (data) => data,
  [FilterEnum.RANDOM]: (data) => {
    const randomIndexList = [];
    const max = Math.min(MAX_RANDOM_FILTER, data.length);
    while (randomIndexList.length < max) {
      const index = getRandomIndex(0, data.length);
      if (! randomIndexList.includes(index)) {
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => data[index]);
  },


  [FilterEnum.DISCUSSED]: (data) =>
    [...data].sort((item1, item2) =>
      item2.comments.length - item1.comments.length
    )
};

let currentFilter = FilterEnum.DEFAULT;

const repaint = (evt, filter, data) => {
  if (currentFilter !== filter) {
    const filteredData = filterHandlers[filter](data);
    const pictures = document.querySelectorAll('.picture');
    pictures.forEach((item) => item.remove());
    renderGallery(filteredData);
    const currentActiveElement = filterForm.querySelector('.img-filters__button--active');
    currentActiveElement.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    currentFilter = filter;
  }
};

// const defaultClickhandler = (data) => {
//   const data = filterHandlers[FilterEnum.DEFAULT](data);
// };
// const randomClickhandler = (data) => {
//   const data = filterHandlers[FilterEnum.RANDOM](data);
// };
// const discussedClickhandler = (data) => {
//   const data = filterHandlers[FilterEnum.DISCUSSED](data);
// };

const debouncedRepaint = debounce(repaint);

const initFilter = (data) => {
  filtersElement.classList.remove('img-filters--inactive');
  // const filtered = filterHandlers[FilterEnum.DISCUSSED](data);
  defaultBtn.addEventListener('click', (evt) => {
    debouncedRepaint(evt, FilterEnum.DEFAULT, data);
  });
  randomBtn.addEventListener('click', (evt) => {
    debouncedRepaint(evt, FilterEnum.RANDOM, data);
  });
  discussedBtn.addEventListener('click', (evt) => {
    debouncedRepaint(evt, FilterEnum.DISCUSSED, data);
  });
};

export { initFilter, debouncedRepaint };
