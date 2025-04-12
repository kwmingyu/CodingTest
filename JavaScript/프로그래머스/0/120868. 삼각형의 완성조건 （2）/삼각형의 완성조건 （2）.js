function solution(sides) {
  let answer = [];
  let n = Math.min(...sides);
  let m = Math.max(...sides);
  let a = m - n;
  let b = m;

  //m이 가장 긴 변일 때
  while (a < m) {
    a++;
    answer.push(a);
  }

  //b가 가장 긴 변일 때
  while (b < m + n - 1) {
    b++;
    answer.push(b);
  }
  return answer.length;
}