/**
 * @param {Function} func
 * @param {Number} delay
 */
export function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    const context = this;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
}
export default debounce;
