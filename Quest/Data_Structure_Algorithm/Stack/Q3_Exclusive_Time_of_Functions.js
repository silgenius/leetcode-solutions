/**
 * Calculates the exclusive execution time of each function on a single-threaded CPU.
 *
 * The CPU runs a program with `n` functions, each identified by a unique ID from `0` to `n - 1`.
 * Function calls are managed using a call stack:
 * - When a function starts, its ID is pushed onto the stack.
 * - When a function ends, its ID is popped from the stack.
 * - The function on top of the stack is the one currently executing.
 *
 * Each log entry is formatted as:
 *   "{function_id}:{start|end}:{timestamp}"
 *
 * - A "start" log indicates the function begins execution at the start of the given timestamp.
 * - An "end" log indicates the function finishes execution at the end of the given timestamp.
 *
 * A function’s exclusive time is the total time spent executing that function itself,
 * excluding the time spent in any functions it calls (including recursive calls).
 *
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

var exclusiveTime = function (n, logs) {
  const res = new Array(n).fill(0);
  const stack = [];

  const parseLog = (log) => {
    const [id, status, time] = log.split(":");
    return {
      id: Number(id),
      time: Number(time),
      status: status,
    };
  };

  let prevTime = 0;
  for (const log of logs) {
    const parsedLog = parseLog(log);
    if (parsedLog.status === "start") {
      if (stack.length > 0) {
        res[stack[stack.length - 1]] += parsedLog.time - prevTime;
      }
      stack.push(parsedLog.id);
      prevTime = parsedLog.time;
    } else {
      res[stack.pop()] += parsedLog.time - prevTime + 1;
      prevTime = parsedLog.time + 1;
    }
  }

  return res;
};
