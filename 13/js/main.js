import { getPictures } from './data.js';
import { renderGallery } from './gallery.js';
import  { initUploadImg } from './form.js';

renderGallery(getPictures());
initUploadImg();
