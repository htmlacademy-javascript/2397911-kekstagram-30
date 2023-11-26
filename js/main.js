import { renderGallery } from './gallery.js';
import './form.js';
import { loadPictures } from './api.js';
import { showErrorMessage } from './util.js';
import { initFilter } from './filters.js';

async function bootstrap() {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);
    initFilter();
  } catch (error) {
    // console.error(error);
    showErrorMessage();
  }
}

bootstrap();

// try {
//   // const data = await loadPictures();
//   const debouncedRenderGallery = debounce(renderGallery);
//   // initFilter(data, debouncedRenderGallery);
//   // renderGallery(debouncedRepaint());
// } catch {
//   showErrorMessage();
// }
