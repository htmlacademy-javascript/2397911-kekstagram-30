const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorMessageTemplate = document
  .querySelector('#data-error')
  .content
  .querySelector('.data-error');

const showErrorMessage = () => {
  const errorElement = errorMessageTemplate.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

export { showErrorMessage, debounce, throttle };
