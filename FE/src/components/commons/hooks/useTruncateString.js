export function useTruncateString() {
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }

  function truncateFileName(str, maxLength) {
    // 파일명과 확장자를 분리
    const dotIndex = str.lastIndexOf(".");
    const fileName = dotIndex !== -1 ? str.slice(0, dotIndex) : str;
    const extension = dotIndex !== -1 ? str.slice(dotIndex) : "";

    // 확장자를 제외한 파일명이 maxLength를 초과하는 경우
    if (fileName.length > maxLength) {
      const frontPartLength = maxLength - 3; // "..."의 길이 고려
      const frontPart = fileName.slice(0, frontPartLength);
      return frontPart + "..." + extension;
    }

    // 파일명이 maxLength 이하인 경우 원래 문자열 반환
    return str;
  }

  return { truncateString, truncateFileName };
}
