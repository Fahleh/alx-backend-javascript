// Returns a Set from an array.
export default function setFromArray(array) {
  if (!(array instanceof Array)) throw new Error('Argument must be an array');
  return new Set(array);
}
