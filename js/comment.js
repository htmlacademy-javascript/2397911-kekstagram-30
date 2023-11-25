const bigPictureElement = document.querySelector('.big-picture');
const commentElement = bigPictureElement.querySelector('.social__comment');
const commentsListElement = bigPictureElement.querySelector('.social__comments');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');

const createComment = function ({ avatar, message, name }) {
  const newComment = commentElement.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = function (comments) {
  commentsListElement.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  commentsListElement.append(fragment);
};

const initCommentList = function () {
  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
};

export { renderComments, initCommentList };
