const bigPictureModal = document.querySelector('.big-picture');
const bigPictureImg = bigPictureModal.querySelector('.big-picture__img')
  .querySelector('img');
const likesCount = bigPictureModal.querySelector('.likes-count');
const commentsCount = bigPictureModal.querySelector('.comments-count');
const btnCloseBigPicture = bigPictureModal.querySelector('.big-picture__cancel');
const socialCommentList = document.querySelector('.social__comments');
const socialComment = socialCommentList.querySelector('.social__comment');
const socialCommentCount = bigPictureModal.querySelector(
  '.social__comment-count',
);
const socialCaption = bigPictureModal.querySelector('.social__caption');
const commentsLoader = bigPictureModal.querySelector('.comments-loader');
const body = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeFullSizePhoto();
  }
};

const openFullSizePhoto = () => {
  bigPictureModal.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentList.innerHTML = '';

  document.addEventListener('keydown', onDocumentKeydown);
};

const createCommentOnBigPhoto = (comment) => {
  const commentElement = socialComment.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    commentsFragment.append(createCommentOnBigPhoto(comment));
  });
  socialCommentList.append(commentsFragment);
};

const renderBigPictureFullScreen = (picture) => {
  openFullSizePhoto();
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  socialCaption.textContent = picture.description;
  commentsCount.textContent = picture.comments.length;
  renderComments(picture.comments);
};

const closeFullSizePhoto = () => {
  bigPictureModal.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

btnCloseBigPicture.addEventListener('click', () => {
  closeFullSizePhoto();
});

export { renderBigPictureFullScreen };
