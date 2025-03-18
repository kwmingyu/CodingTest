function solution(array) {
  if (array.length === 0) return -1; // 빈 배열 처리

  let countMap = new Map();

  // 배열의 빈도를 카운트
  for (let num of array) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let maxCount = 0;
  let maxValue = -1;
  let isDuplicate = false;

  // 최빈값 찾기
  for (let [num, count] of countMap.entries()) {
    if (count > maxCount) {
      maxCount = count;
      maxValue = num;
      isDuplicate = false; // 새로운 최빈값이 생기면 중복 플래그 초기화
    } else if (count === maxCount) {
      isDuplicate = true; // 같은 빈도를 가진 숫자가 여러 개일 경우
    }
  }

  return isDuplicate ? -1 : maxValue;
}
