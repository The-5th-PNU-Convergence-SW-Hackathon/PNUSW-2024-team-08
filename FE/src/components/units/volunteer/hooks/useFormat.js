export function useFormatDate(dateTimeStr, form) {
  // 주어진 문자열을 Date 객체로 변환 (이미 KST라고 가정)
  const date = new Date(dateTimeStr);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  // 요일 추출
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const weekdayIndex = date.getDay();
  const weekday = weekdays[weekdayIndex];

  // 오전/오후 구분
  const ampm = date.getHours() >= 12 ? "오후" : "오전";
  const hour12 = date.getHours() % 12 || 12; // 12시간 형식으로 변환

  // 추출된 정보를 조합하여 원하는 형식으로 반환
  if(form === "yymmdd"){
    return `${year}년 ${month}월 ${day}일 (${weekday})`;
  } else if(form === "mm/dd") {
    return `${month}/${day}`
  } else if (form === "yy.mm.dd") {
    return `${year}.${month}.${day}`
  }
  return `${month}/${day} (${weekday}) ${ampm} ${hour12}:${minutes}`;
}

// ... (다른 함수들은 그대로 유지)

export function useFormatDateTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = (now - date) / 1000;

  const yearDiff = now.getFullYear() - date.getFullYear();
  const monthDiff = now.getMonth() - date.getMonth() + (yearDiff * 12);
  const dayDiff = Math.floor(diffInSeconds / 86400);
  const hourDiff = Math.floor(diffInSeconds / 3600);
  const minuteDiff = Math.floor(diffInSeconds / 60);

  if (yearDiff > 1) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  } else if (monthDiff > 1) {
    return `${monthDiff}개월 전`;
  } else if (dayDiff > 0) {
    return `${dayDiff}일 전`;
  } else if (hourDiff > 0) {
    return `${hourDiff}시간 전`;
  } else if (minuteDiff > 0) {
    return `${minuteDiff}분 전`;
  } else {
    return '방금 전';
  }
}

export function useFormatCost(cost) {
  // 숫자를 문자열로 변환하고, 천 단위마다 ','를 추가
  return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}