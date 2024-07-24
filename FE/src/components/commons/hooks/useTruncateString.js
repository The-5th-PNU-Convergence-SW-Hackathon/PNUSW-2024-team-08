export function useTruncateString() {
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }

  function truncateFileName(str, maxLength) {
    if (str.length > maxLength) {
      const frontPartLength = maxLength - 6;
      const frontPart = str.slice(0, frontPartLength);
      const backPart = str.slice(-3);
      return frontPart + "..." + backPart;
    }
    return str;
  }

  return { truncateString, truncateFileName };
}
