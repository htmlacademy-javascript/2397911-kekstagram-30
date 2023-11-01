import {getPhoto} from './data.js';
import { renderThumbnails } from './thumbnail.js';

getPhoto();
renderThumbnails(getPhoto());
console.log(getPhoto());

