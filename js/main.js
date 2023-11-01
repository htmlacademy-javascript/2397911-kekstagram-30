import {getPhoto} from './data.js';
import { renderPictures } from './thumbnail.js';

getPhoto();
renderPictures(getPhoto());
console.log(getPhoto());

