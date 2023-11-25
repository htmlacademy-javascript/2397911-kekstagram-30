import { renderThumbnails } from './thumbnail';
import { showPicture } from './picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');

    if (! thumbnail) {
      return;
    }

    evt.preventDefault();
    const thumbnailId = +thumbnail.dataset.thumnailId;
    const pictureData = pictures.find(({ id }) => id === thumbnailId);
    //TODO: Написать функцию показа полного изображения
    showPicture(pictureData);
  });

  renderThumbnails(pictures, container);
};

export { renderGallery } ;
