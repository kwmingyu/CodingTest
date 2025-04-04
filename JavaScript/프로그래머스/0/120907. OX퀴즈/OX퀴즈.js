function solution(quiz) {
  const mapped = quiz.map((v) => v.replace("=", "=="));
  return mapped.map((v) => eval(v) ? "O" : "X");
}