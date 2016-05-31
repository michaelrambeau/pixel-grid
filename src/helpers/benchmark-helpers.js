// Utilily to measure durations, return ms
export function timer() {
  if (window.performance) return performance.now()
  return new Date().getTime()
}
