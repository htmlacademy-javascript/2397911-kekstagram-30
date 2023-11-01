const thumbnailTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({url, description, comments, likes}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture').src = url;
  thumbnail.querySelector('.picture').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
}

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.array.forEach(element => {
    const thumbnail = createThumbnail(element);
    fragment.append(thumbnail);
  });

  container.append(fragment);
}

export {renderThumbnails};
