export function debounce(fn, delay) {
  let timeId = null;
  return function () {
    window.clearTimeout(timeId);
    timeId = window.setTimeout(() => {
      fn && fn();
    }, delay);
  }
}
