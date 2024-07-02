// Returns a string of all the set values that start with a specific string (startString).
export default function cleanSet(set, startString) {
  const result = [];
  if (
    !set
    || !startString
    || !(set instanceof Set)
    || typeof startString !== 'string'
  ) {
    return '';
  }

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const truncated = value.substring(startString.length);

      if (truncated && truncated !== value) {
        result.push(truncated);
      }
    }
  }
  return result.join('-');
}
