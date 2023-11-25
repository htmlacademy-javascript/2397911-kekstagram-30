import {getRandomInteger, getRandomArrayElement} from './util.js';

const SIMILAR_PHOTO_COUNT = 25;

const DESCRIPTIONS = [
  '#choreography #танец',
  '#sea #summer #отдых',
  '#healthylifestyle #зож #отдых',
];

const NAMES = [
  'Алена',
  'Алина',
  'Анастасия',
  'Александр',
  'Максим',
  'Вася',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const getIndex = () => {
  let index = 0;
  return function() {
    return ++index;
  };
};

const counterCommentID = getIndex();
const counterPhotoID = getIndex();

const createComment = () => ({
  id: counterCommentID(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, 5)],
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: counterPhotoID(),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
});

const getPhoto = () =>
  Array.from({length: SIMILAR_PHOTO_COUNT}, (_, photoIndex) =>
    createPhoto(photoIndex + 1)
  );

export {getPhoto};

// const similarPhotos = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

// export {similarPhotos};
