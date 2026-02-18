// Problem Description – Time-Limited Async Function

// You are given an asynchronous function and a time limit t in milliseconds.
// Your task is to wrap this function so that it either resolves normally if it completes within the given time or rejects
// with the message "Time Limit Exceeded" if execution takes longer than t.
function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise(async (res, rej) => {
      const now = new Date().getTime();
      console.log("now:" + now);

      console.log("calling fn");
      let result = await fn(...args);
      console.log("called");

      const end = new Date().getTime();
      console.log("end:" + end);

      const total = end - now;
      console.log("total: ", total, "t: ", t);

      if (total > t) {
        console.log("took longer");
        rej("Time Limit Exceeded");
      } else {
        res(result);
      }
    });
  };
}

async function main() {
  const fn = async () => {
    await new Promise((res) => setTimeout(res, 150));
    return "done";
  };

  const limitedFn = timeLimit(fn, 50);

  limitedFn()
    .then((d) => console.log(d))
    .catch((e) => console.log(e));
  // console.log(result);
}

main();

module.exports = timeLimit;
